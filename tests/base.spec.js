'use strict'

const finviz = require('../src')

const axios = require('axios').default
const MockAdapter = require('axios-mock-adapter').default
const mockAxios = new MockAdapter(axios)
const fs = require('fs')
const path = require('path')

function fixture(fileName) {
    const fixturesDir = path.resolve('tests/fixtures/')
    return fs.readFileSync(
        path.join(fixturesDir, fileName + '.fixture'),
        { encoding: 'utf8' }
    )
}

describe('FinVizScreener', () => {
    beforeEach(() => mockAxios.onAny().reply(500))
    afterEach(() => mockAxios.reset())
    describe('.scan()', () => {
        it('should use filters and signal, call the finviz url and return a list of tickers', async () => {
            mockAxios.reset()
            mockAxios.onAny().reply(200, fixture('screener-page'))

            const res = await finviz().exchange('AMEX').index('S&P 500').signal('Wedge Down').scan()

            expect(mockAxios.history.get[0].params).toEqual({ f: 'exch_amex,idx_sp500', s: 'ta_p_wedgedown' })
            expect(res).toEqual(['ABC', 'DEF', 'GHI'])
        }) // test
        it('should follow pagination links and return all available tickers', async () => {
            mockAxios.reset()
            mockAxios.onAny().replyOnce(200, fixture('screener-page-1'))
            mockAxios.onAny().replyOnce(200, fixture('screener-page-2'))
            mockAxios.onAny().replyOnce(200, fixture('screener-page-3'))

            const res = await finviz({ pageLimit: 0, requestTimeout: 0 })
                .exchange('AMEX').index('S&P 500').signal('Wedge Down').scan()

            expect(mockAxios.history.get[0].params).toEqual({ f: 'exch_amex,idx_sp500', s: 'ta_p_wedgedown' })
            expect(res).toEqual(['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III'])
        }) // test
        it('should only follow the first 2 pagination links, if pageLimit = 2', async () => {
            mockAxios.reset()
            mockAxios.onAny().replyOnce(200, fixture('screener-page-1'))
            mockAxios.onAny().replyOnce(200, fixture('screener-page-2'))
            mockAxios.onAny().replyOnce(200, fixture('screener-page-3'))

            const res = await finviz({ pageLimit: 2, requestTimeout: 0 })
                .exchange('AMEX').index('S&P 500').signal('Wedge Down').scan()

            expect(mockAxios.history.get[0].params).toEqual({ f: 'exch_amex,idx_sp500', s: 'ta_p_wedgedown' })
            expect(res).toEqual(['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'])
        }) // test
    }) // group
}) // group
