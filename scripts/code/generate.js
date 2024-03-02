'use strict'

const axios = require('axios').default
const htmlparser2 = require('htmlparser2')
const cheerio = require('cheerio').default
const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

/**
 * Dump and die helper method
 * @returns {void}
 */
const dd = function() { // eslint-disable-line
    console.log.apply(null, arguments) // eslint-disable-line
    process.exit()
}

// them files
const htmlCacheFile = path.resolve(__dirname, '../../scripts/cache/fvPage.cache.html')
const clientTmplFile = path.resolve(__dirname, '../../scripts/code/templates/client.ejs')
const clientOutFile = path.resolve(__dirname, '../../src/finviz.js')
const testsTmplFile = path.resolve(__dirname, '../../scripts/code/templates/tests.ejs')
const testsOutFile = path.resolve(__dirname, '../../tests/finviz.spec.js')

/**
 *
 */
async function getHtml() {
    if (fs.existsSync(htmlCacheFile)) {
        return fs.readFileSync(htmlCacheFile, { encoding: 'utf8' })
    }

    try {
        const { data } = await axios.get('https://finviz.com/screener.ashx?v=411&ft=4', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            }
        })
        fs.writeFileSync(htmlCacheFile, data, { encoding: 'utf8' })
        return data
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

void (async () => {
    const html = await getHtml()
    const dom = htmlparser2.parseDocument(html)
    const $ = cheerio.load(dom)
    const $titles = $('.filters-border .filters-cells .screener-combo-title')
    const $props = $('.filters-border .filters-cells .screener-combo-text')
    const $signal = $('select#signalSelect')
    // build the signals obj
    const signals = {}
    $signal.children('option').each((idx, el) => {
        const e = $(el)
        const [val, name] = [e.prop('value'), e.text()]
        if (! name.toLowerCase().startsWith('none')) {
            signals[name] = val.match(/s=(.*)[&|$]/)[1]
        }
    })
    // build the funcs obj
    const funcs = []
    const titles = $titles.map((idx, el) => {
        const e = $(el)
        return {
            title: e.text(),
            desc: e.prop('data-boxover').match(/<td class='tooltip_tab'>(.*)<\/td>/)[1],
        }
    }).get()
    $props.each((idx, el) => {
        const e = $(el)
        const func = {}
        const filter = { name: e.prop('data-filter'), values: [] }
        e.children().each((idx, el) => {
            const e = $(el)
            const [name, value] = [e.text(), e.val()]
            // skip paid features
            if (value && ! name.toLowerCase().includes('elite only')) {
                filter.values.push({ name, value })
            }
        })
        // skip filters with no options (ie. paid features)
        if (! filter.values.length) {
            return
        }
        func.filter = filter
        // break tag should be a space
        func.desc = titles[idx].desc.replace(/<br>/g, ' ').replace(/\s+/g, ' ')
        func.name = _.camelCase(
            titles[idx].title
                .replace('<br/>', ' ')
                // remove invalid chars
                .replace(/-|\/|\(|\)|\./gm, '')
                // rename numbers to words
                .replace('20Day', 'TwentyDay')
                .replace('50Day', 'FiftyDay')
                .replace('200Day', 'TwoHundredDay')
                .replace('52Week', 'FiftyTwoWeek')
        )
        funcs.push(func)
    })

    // render client and tests
    const opts = { encoding: 'utf8' }
    const client = await ejs.renderFile(clientTmplFile, { funcs, signals })
    fs.writeFileSync(clientOutFile, client, opts)
    const tests = await ejs.renderFile(testsTmplFile, { funcs, signals })
    fs.writeFileSync(testsOutFile, tests, opts)
})()
