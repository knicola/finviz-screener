'use strict'

const FinVizScreener = require('../src')

const axios = require('axios').default
const MockAdapter = require('axios-mock-adapter').default
const mockAxios = new MockAdapter(axios)
const fs = require('fs')
const path = require('path')
const dummyFile = path.resolve('tests/finviz_screener.html')
const html = fs.readFileSync(dummyFile, { encoding: 'utf8' })

describe('FinVizScreener', () => {
    beforeAll(() => mockAxios.onAny().reply(200, html))
    afterAll(() => mockAxios.reset())
    describe('.scan()', () => {
        it('should use filters and signal, call the finviz url and return a list of tickers', async () => {
            const fv = new FinVizScreener()
            expect(fv._filters.length).toEqual(0)
            expect(fv._signal).toEqual('')
            const res = await fv.exchange('AMEX').index('S&P 500').signal('Wedge Down').scan()
            expect(fv._filters.length).toEqual(2)
            expect(fv._filters).toEqual(['exch_amex', 'idx_sp500'])
            expect(fv._signal).toEqual('ta_p_wedgedown')
            expect(mockAxios.history.get[0].params).toEqual({
                f: 'exch_amex,idx_sp500',
                s: 'ta_p_wedgedown',
            })
            expect(res.length).toBe(1000)
            expect(res).toEqual(
                expect.arrayContaining(['A', 'AA', 'AAAU', 'AAC', 'AACG', 'AACIU'])
            )
        }) // test
    }) // group
}) // group
