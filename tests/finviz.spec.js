'use strict'

const FinVizScreener = require('../src')

const axios = require('axios').default
const MockAdapter = require('axios-mock-adapter').default
const mockAxios = new MockAdapter(axios)
const fs = require('fs')
const path = require('path')
const dummyFile = path.resolve('tests/finviz_screener.html')
const html = fs.readFileSync(dummyFile, { encoding: 'utf8' })

describe('Unit Tests', () => {
    beforeAll(() => mockAxios.onAny().reply(200, html))
    afterAll(() => mockAxios.reset())
    describe('.exchange()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'exch_amex'
            fv.exchange('AMEX')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.exchange('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.index()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'idx_sp500'
            fv.index('S&P 500')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.index('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.sector()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sec_basicmaterials'
            fv.sector('Basic Materials')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.sector('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.industry()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ind_stocksonly'
            fv.industry('Stocks only (ex-Funds)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.industry('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.country()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'geo_usa'
            fv.country('USA')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.country('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.marketCap()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'cap_mega'
            fv.marketCap('Mega ($200bln and more)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.marketCap('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.pe()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_pe_low'
            fv.pe('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.pe('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.forwardPe()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_fpe_low'
            fv.forwardPe('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.forwardPe('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.peg()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_peg_low'
            fv.peg('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.peg('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.ps()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_ps_low'
            fv.ps('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.ps('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.pb()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_pb_low'
            fv.pb('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.pb('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.priceCash()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_pc_low'
            fv.priceCash('Low (<3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.priceCash('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.priceFreeCashFlow()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_pfcf_low'
            fv.priceFreeCashFlow('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.priceFreeCashFlow('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowththisYear()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_epsyoy_neg'
            fv.epsGrowththisYear('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.epsGrowththisYear('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthnextYear()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_epsyoy1_neg'
            fv.epsGrowthnextYear('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.epsGrowthnextYear('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthpast5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_eps5years_neg'
            fv.epsGrowthpast5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.epsGrowthpast5Years('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthnext5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_estltgrowth_neg'
            fv.epsGrowthnext5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.epsGrowthnext5Years('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.salesGrowthpast5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_sales5years_neg'
            fv.salesGrowthpast5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.salesGrowthpast5Years('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthqtrOverQtr()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_epsqoq_neg'
            fv.epsGrowthqtrOverQtr('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.epsGrowthqtrOverQtr('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.salesGrowthqtrOverQtr()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_salesqoq_neg'
            fv.salesGrowthqtrOverQtr('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.salesGrowthqtrOverQtr('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.dividendYield()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_div_none'
            fv.dividendYield('None (0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.dividendYield('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnAssets()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_roa_pos'
            fv.returnOnAssets('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.returnOnAssets('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_roe_pos'
            fv.returnOnEquity('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.returnOnEquity('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnInvestment()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_roi_pos'
            fv.returnOnInvestment('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.returnOnInvestment('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.currentRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_curratio_high'
            fv.currentRatio('High (>3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.currentRatio('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.quickRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_quickratio_high'
            fv.quickRatio('High (>3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.quickRatio('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.ltDebtEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_ltdebteq_high'
            fv.ltDebtEquity('High (>0.5)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.ltDebtEquity('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.debtEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_debteq_high'
            fv.debtEquity('High (>0.5)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.debtEquity('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.grossMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_grossmargin_pos'
            fv.grossMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.grossMargin('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.operatingMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_opermargin_pos'
            fv.operatingMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.operatingMargin('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.netProfitMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_netmargin_pos'
            fv.netProfitMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.netProfitMargin('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.payoutRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'fa_payoutratio_none'
            fv.payoutRatio('None (0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.payoutRatio('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.insiderOwnership()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_insiderown_low'
            fv.insiderOwnership('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.insiderOwnership('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.insiderTransactions()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_insidertrans_veryneg'
            fv.insiderTransactions('Very Negative (<20%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.insiderTransactions('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.institutionalOwnership()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_instown_low'
            fv.institutionalOwnership('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.institutionalOwnership('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.institutionalTransactions()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_insttrans_veryneg'
            fv.institutionalTransactions('Very Negative (<20%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.institutionalTransactions('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.floatShort()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_short_low'
            fv.floatShort('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.floatShort('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.analystRecom()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'an_recom_strongbuy'
            fv.analystRecom('Strong Buy (1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.analystRecom('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.optionShort()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_opt_option'
            fv.optionShort('Optionable')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.optionShort('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.earningsDate()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'earningsdate_today'
            fv.earningsDate('Today')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.earningsDate('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.performance()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_perf_dup'
            fv.performance('Today Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.performance('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.performance2()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_perf2_dup'
            fv.performance2('Today Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.performance2('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.volatility()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_volatility_wo3'
            fv.volatility('Week - Over 3%')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.volatility('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.rsi14()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_rsi_ob90'
            fv.rsi14('Overbought (90)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.rsi14('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.gap()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_gap_u'
            fv.gap('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.gap('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.twentyDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_sma20_pb'
            fv.twentyDaySimpleMovingAverage('Price below SMA20')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.twentyDaySimpleMovingAverage('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_sma50_pb'
            fv.fiftyDaySimpleMovingAverage('Price below SMA50')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.fiftyDaySimpleMovingAverage('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.twoHundredDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_sma200_pb'
            fv.twoHundredDaySimpleMovingAverage('Price below SMA200')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.twoHundredDaySimpleMovingAverage('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.change()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_change_u'
            fv.change('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.change('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.changeFromOpen()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_changeopen_u'
            fv.changeFromOpen('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.changeFromOpen('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.twentyDayHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_highlow20d_nh'
            fv.twentyDayHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.twentyDayHighLow('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyDayHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_highlow50d_nh'
            fv.fiftyDayHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.fiftyDayHighLow('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyTwoWeekHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_highlow52w_nh'
            fv.fiftyTwoWeekHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.fiftyTwoWeekHighLow('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.pattern()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_pattern_horizontal'
            fv.pattern('Horizontal S/R')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.pattern('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.candlestick()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_candlestick_lls'
            fv.candlestick('Long Lower Shadow')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.candlestick('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.beta()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_beta_u0'
            fv.beta('Under 0')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.beta('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.averageTrueRange()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_averagetruerange_o0.25'
            fv.averageTrueRange('Over 0.25')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.averageTrueRange('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.averageVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_avgvol_u50'
            fv.averageVolume('Under 50K')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.averageVolume('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.relativeVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_relvol_o10'
            fv.relativeVolume('Over 10')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.relativeVolume('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.currentVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_curvol_u50'
            fv.currentVolume('Under 50K')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.currentVolume('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.price()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_price_u1'
            fv.price('Under $1')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.price('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.targetPrice()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'targetprice_a50'
            fv.targetPrice('50% Above Price')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.targetPrice('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.ipoDate()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'ipodate_today'
            fv.ipoDate('Today')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.ipoDate('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.sharesOutstanding()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_outstanding_u1'
            fv.sharesOutstanding('Under 1M')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.sharesOutstanding('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.float()', () => {
        it('should add filter value to the list', () => {
            const fv = new FinVizScreener()
            const expected = 'sh_float_u1'
            fv.float('Under 1M')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.float('Something Unkown')).toThrow()
        }) // test
    }) // group
    describe('.signal()', () => {
        it('should add signal', () => {
            const fv = new FinVizScreener()
            const expected = 'ta_topgainers'
            fv.signal('Top Gainers')
            expect(fv._signal).toEqual(expected)
        }) // test
        it('should throw if an unknown signal is provided', () => {
            const fv = new FinVizScreener()
            expect(() => fv.signal('Something Unknown')).toThrow()
        }) // test
    }) // group
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
