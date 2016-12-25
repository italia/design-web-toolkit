const _ = require('lodash')

const icons = require('./ita/font/selection.json').icons

module.exports = { context: { icons: _.map(icons, (v) => v.properties.name) }}
