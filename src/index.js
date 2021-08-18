'use strict'

const FinVizScreener = require('./finviz')

/**
 * @function
 * @returns {FinVizScreener} FinVizScreener instance
 */
function finviz() {
    return new FinVizScreener()
}

module.exports = finviz
module.exports.FinVizScreener = FinVizScreener
