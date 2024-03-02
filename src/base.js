'use strict'

const axios = require('axios').default
const rateLimit = require('axios-rate-limit')
const cheerio = require('cheerio')

/**
 * @typedef {object} Options
 * @property {number?} pageLimit Maximum number of pages to fetch. Set to `0` to disable. Default is 1
 * @property {number?} requestTimeout Number of milliseconds to wait between requests. Default is 1000
 */

const defaults = {
    pageLimit: 1,
    requestTimeout: 1000,
}

/**
 * @class
 * @typicalname fv
 * @example
 * const fv = new FinVizScreener()
 *
 * const tickers = await fv
 *     .averageVolume('Over 2M')
 *     .sector('Technology')
 *     .price('Over $50')
 *     .scan()
 *
 * console.log(tickers) //=> ['AAPL', 'MSFT', 'IBM', ... ]
 */
class FinVizScreener {
    /**
     * @param {Options} options Options
     */
    constructor(options) {
        /** @type {Options} Client instance options */
        this.options = Object.assign({}, defaults, options)
        /** @private */
        this._axios = rateLimit(
            axios.create({ baseURL: 'https://finviz.com/screener.ashx?v=411' }),
            { maxRequests: 1, perMilliseconds: this.options.requestTimeout }
        )
        /** @private */
        this._signal = ''
        /** @private */
        this._filters = []
    }

    /**
     * Scan for stocks.
     * @returns {Promise<string[]>} List of stock tickers
     */
    async scan() {
        const params = { f: this._filters.join(','), s: this._signal }

        let tickers = []
        let nextPage = ''
        let cancel = false
        let counter = 0

        do {
            cancel = this.options.pageLimit !== 0 && ++counter >= this.options.pageLimit

            // fetch tickers
            const res = await this._axios.get(nextPage, { params,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                }})
            const $ = cheerio.load(res.data)
            tickers = tickers.concat(
                $('#screener-table > td > table > tbody > tr > td').text().split(' ')
                    .map(t => t.trim())
                    .filter(t => t.length > 0)
            )

            // find next page
            const $nextPage = $('.screener_pagination').children().last()
            nextPage = $nextPage.hasClass('is-next') ? $nextPage.prop('href') : ''
        } while(nextPage && ! cancel)

        return tickers
    } // scan()
} // class

module.exports = FinVizScreener
