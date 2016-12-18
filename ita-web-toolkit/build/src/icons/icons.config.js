const icons = require('./ita/font/selection.json').icons
const iconNames = []

icons.forEach((v) => {
  iconNames.push(v.properties.name)
})

module.exports = { context: { icons: iconNames }}
