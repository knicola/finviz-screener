'use strict'

const axios = require('axios').default
const rateLimit = require('axios-rate-limit')
const cheerio = require('cheerio')
const selector = '#screener-content > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span'

/**
 * @class
 * @typicalname fv
 * @example
 * const fv = new FinVizScreener()
 * const tickers = await fv
 *   .exchange('AMEX')
 *   .marketCap('Small ($300mln to $2bln)')
 *   .scan()
 * console.log(tickers)
 */
class FinVizScreener {
    constructor() {
        this.axios = rateLimit(axios.create({ baseURL: 'https://finviz.com/screener.ashx?v=411' }), { maxRequests: 1, perMilliseconds: 1500 })
        /** @private */
        this._signal = ''
        /** @private */
        this._filters = []
    }

    /**
     * Scan for stocks. Will return only the first 1000 tickers available.
     *
     * @returns {Promise<string[]>} List of stock tickers
     */
    async scan() {
        const params = { f: this._filters.join(','), s: this._signal }
        const res = await axios.get(this._url, { params })
        const $ = cheerio.load(res.data)
        return $(selector).map((i, el) => $(el).text().trim()).get()
    }
} // class

module.exports = FinVizScreener
