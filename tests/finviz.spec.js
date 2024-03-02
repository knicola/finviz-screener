'use strict'

const finviz = require('../src')

describe('FinVizScreener - Extended', () => {
    describe('.exchange()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'exch_amex'
            fv.exchange('AMEX')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.exchange('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.index()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'idx_sp500'
            fv.index('S&P 500')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.index('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.sector()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sec_basicmaterials'
            fv.sector('Basic Materials')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.sector('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.industry()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ind_stocksonly'
            fv.industry('Stocks only (ex-Funds)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.industry('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.country()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'geo_usa'
            fv.country('USA')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.country('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.marketCap()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'cap_mega'
            fv.marketCap('Mega ($200bln and more)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.marketCap('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.pe()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_pe_low'
            fv.pe('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.pe('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.forwardPe()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_fpe_low'
            fv.forwardPe('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.forwardPe('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.peg()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_peg_low'
            fv.peg('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.peg('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.ps()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_ps_low'
            fv.ps('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.ps('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.pb()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_pb_low'
            fv.pb('Low (<1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.pb('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.priceCash()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_pc_low'
            fv.priceCash('Low (<3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.priceCash('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.priceFreeCashFlow()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_pfcf_low'
            fv.priceFreeCashFlow('Low (<15)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.priceFreeCashFlow('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowththisYear()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_epsyoy_neg'
            fv.epsGrowththisYear('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.epsGrowththisYear('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthnextYear()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_epsyoy1_neg'
            fv.epsGrowthnextYear('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.epsGrowthnextYear('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthpast5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_eps5years_neg'
            fv.epsGrowthpast5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.epsGrowthpast5Years('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthnext5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_estltgrowth_neg'
            fv.epsGrowthnext5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.epsGrowthnext5Years('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.salesGrowthpast5Years()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_sales5years_neg'
            fv.salesGrowthpast5Years('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.salesGrowthpast5Years('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.epsGrowthqtrOverQtr()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_epsqoq_neg'
            fv.epsGrowthqtrOverQtr('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.epsGrowthqtrOverQtr('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.salesGrowthqtrOverQtr()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_salesqoq_neg'
            fv.salesGrowthqtrOverQtr('Negative (<0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.salesGrowthqtrOverQtr('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.earningsRevenueSurprise()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_epsrev_bp'
            fv.earningsRevenueSurprise('Both positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.earningsRevenueSurprise('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.dividendYield()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_div_none'
            fv.dividendYield('None (0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.dividendYield('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnAssets()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_roa_pos'
            fv.returnOnAssets('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.returnOnAssets('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_roe_pos'
            fv.returnOnEquity('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.returnOnEquity('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.returnOnInvestment()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_roi_pos'
            fv.returnOnInvestment('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.returnOnInvestment('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.currentRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_curratio_high'
            fv.currentRatio('High (>3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.currentRatio('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.quickRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_quickratio_high'
            fv.quickRatio('High (>3)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.quickRatio('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.ltDebtEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_ltdebteq_high'
            fv.ltDebtEquity('High (>0.5)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.ltDebtEquity('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.debtEquity()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_debteq_high'
            fv.debtEquity('High (>0.5)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.debtEquity('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.grossMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_grossmargin_pos'
            fv.grossMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.grossMargin('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.operatingMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_opermargin_pos'
            fv.operatingMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.operatingMargin('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.netProfitMargin()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_netmargin_pos'
            fv.netProfitMargin('Positive (>0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.netProfitMargin('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.payoutRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'fa_payoutratio_none'
            fv.payoutRatio('None (0%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.payoutRatio('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.insiderOwnership()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_insiderown_low'
            fv.insiderOwnership('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.insiderOwnership('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.insiderTransactions()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_insidertrans_veryneg'
            fv.insiderTransactions('Very Negative (<20%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.insiderTransactions('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.institutionalOwnership()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_instown_low'
            fv.institutionalOwnership('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.institutionalOwnership('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.institutionalTransactions()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_insttrans_veryneg'
            fv.institutionalTransactions('Very Negative (<20%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.institutionalTransactions('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.floatShort()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_short_low'
            fv.floatShort('Low (<5%)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.floatShort('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.analystRecom()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'an_recom_strongbuy'
            fv.analystRecom('Strong Buy (1)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.analystRecom('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.optionShort()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_opt_option'
            fv.optionShort('Optionable')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.optionShort('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.earningsDate()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'earningsdate_today'
            fv.earningsDate('Today')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.earningsDate('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.performance()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_perf_dup'
            fv.performance('Today Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.performance('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.performance2()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_perf2_dup'
            fv.performance2('Today Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.performance2('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.volatility()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_volatility_wo3'
            fv.volatility('Week - Over 3%')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.volatility('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.rsi14()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_rsi_ob90'
            fv.rsi14('Overbought (90)')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.rsi14('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.gap()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_gap_u'
            fv.gap('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.gap('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.twentyDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_sma20_pb'
            fv.twentyDaySimpleMovingAverage('Price below SMA20')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.twentyDaySimpleMovingAverage('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_sma50_pb'
            fv.fiftyDaySimpleMovingAverage('Price below SMA50')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.fiftyDaySimpleMovingAverage('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.twoHundredDaySimpleMovingAverage()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_sma200_pb'
            fv.twoHundredDaySimpleMovingAverage('Price below SMA200')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.twoHundredDaySimpleMovingAverage('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.change()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_change_u'
            fv.change('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.change('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.changeFromOpen()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_changeopen_u'
            fv.changeFromOpen('Up')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.changeFromOpen('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.twentyDayHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_highlow20d_nh'
            fv.twentyDayHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.twentyDayHighLow('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyDayHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_highlow50d_nh'
            fv.fiftyDayHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.fiftyDayHighLow('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.fiftyTwoWeekHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_highlow52w_nh'
            fv.fiftyTwoWeekHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.fiftyTwoWeekHighLow('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.allTimeHighLow()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_alltime_nh'
            fv.allTimeHighLow('New High')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.allTimeHighLow('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.pattern()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_pattern_horizontal'
            fv.pattern('Horizontal S/R')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.pattern('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.candlestick()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_candlestick_lls'
            fv.candlestick('Long Lower Shadow')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.candlestick('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.beta()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_beta_u0'
            fv.beta('Under 0')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.beta('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.averageTrueRange()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ta_averagetruerange_o0.25'
            fv.averageTrueRange('Over 0.25')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.averageTrueRange('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.averageVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_avgvol_u50'
            fv.averageVolume('Under 50K')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.averageVolume('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.relativeVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_relvol_o10'
            fv.relativeVolume('Over 10')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.relativeVolume('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.currentVolume()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_curvol_u50'
            fv.currentVolume('Under 50K')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.currentVolume('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.price()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_price_u1'
            fv.price('Under $1')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.price('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.targetPrice()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'targetprice_a50'
            fv.targetPrice('50% Above Price')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.targetPrice('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.ipoDate()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'ipodate_today'
            fv.ipoDate('Today')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.ipoDate('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.sharesOutstanding()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_outstanding_u1'
            fv.sharesOutstanding('Under 1M')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.sharesOutstanding('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.float()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'sh_float_u1'
            fv.float('Under 1M')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.float('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.singleCategory()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_category_bondsbroadmarket'
            fv.singleCategory('Bonds - Broad Market')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.singleCategory('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.assetType()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_assettype_bonds'
            fv.assetType('Bonds')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.assetType('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.sponsor()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_sponsor_aberdeen'
            fv.sponsor('Aberdeen')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.sponsor('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.netExpenseRatio()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_netexpense_u01'
            fv.netExpenseRatio('Under 0.1%')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.netExpenseRatio('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.netFundFlows()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_fundflows_1mo0'
            fv.netFundFlows('1 Month - Over 0%')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.netFundFlows('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.annualizedReturn()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_return_1yo0'
            fv.annualizedReturn('1 Year - Over 0%')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.annualizedReturn('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.tags()', () => {
        it('should add filter value to the list', () => {
            const fv = finviz()
            const expected = 'etf_tags_13f'
            fv.tags('13F')
            expect(fv._filters).toContain(expected)
        }) // test
        it('should throw if an unknown filter is provided', () => {
            const fv = finviz()
            expect(() => fv.tags('Something Unknown')).toThrow()
        }) // test
    }) // group
    describe('.signal()', () => {
        it('should add signal', () => {
            const fv = finviz()
            const expected = 'ta_topgainers'
            fv.signal('Top Gainers')
            expect(fv._signal).toEqual(expected)
        }) // test
        it('should throw if an unknown signal is provided', () => {
            const fv = finviz()
            expect(() => fv.signal('Something Unknown')).toThrow()
        }) // test
    }) // group
}) // group
