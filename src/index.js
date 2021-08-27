'use strict'

const FinVizScreener = require('./finviz')

/**
 * @typedef {import('./base').Options} Options
 */
/**
 * @function
 * @param {Options} options Options
 * @returns {FinVizScreener} FinVizScreener instance
 * @example
 * const tickers = await finviz()
 *     .averageVolume('Over 2M')
 *     .sector('Technology')
 *     .price('Over $50')
 *     .scan()
 *
 * console.log(tickers) //=> ['AAPL', 'MSFT', 'IBM', ... ]
 */
function finviz(options) {
    return new FinVizScreener(options)
}

finviz.FinVizScreener = FinVizScreener

module.exports = finviz
// Allows for { finviz }
module.exports.finviz = finviz
// Allows for strict ES Module support
module.exports.default = finviz
