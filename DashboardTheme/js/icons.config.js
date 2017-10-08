const _ = require('lodash')

const icons = require('./font/selection.json').icons

module.exports = {
  order: 60,
  context: {
    icons: _.map(icons, (v) => v.properties.name)
  }
}
