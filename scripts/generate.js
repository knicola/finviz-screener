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
 *
 * @returns {void}
 */
const dd = function() { // eslint-disable-line
    console.log.apply(null, arguments) // eslint-disable-line
    process.exit()
}

// them files
const htmlCacheFile = path.resolve('scripts/cache/fvPage.cache.html')
const clientTmplFile = path.resolve('scripts/templates/client.ejs')
const clientOutFile = path.resolve('src/finviz.js')
const testsTmplFile = path.resolve('scripts/templates/tests.ejs')
const testsOutFile = path.resolve('tests/finviz.spec.js')

async function getHtml() {
    if (fs.existsSync(htmlCacheFile)) {
        return fs.readFileSync(htmlCacheFile, { encoding: 'utf8' })
    }

    const { data } = await axios.get('https://finviz.com/screener.ashx?v=411&ft=4')
    fs.writeFileSync(htmlCacheFile, data, { encoding: 'utf8' })
    return data
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
            desc: e.prop('title').match(/<td class='tooltip_tab'>(.*)<\/td>/)[1],
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

    // render client
    const rendered = await ejs.renderFile(clientTmplFile, { funcs, signals })
    fs.writeFileSync(clientOutFile, rendered, { encoding: 'utf8' })
    const tests = await ejs.renderFile(testsTmplFile, { funcs, signals })
    fs.writeFileSync(testsOutFile, tests, { encoding: 'utf8' })
})()
