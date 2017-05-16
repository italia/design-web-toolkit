module.exports = {
  "plugins": [
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "plugin/selector-bem-pattern": {
      "preset": "suit",
      "utilitySelectors": "^\\.u-[a-zA-Z0-9\-]+$"
    },
    "at-rule-empty-line-before": null,
  },
  "extends": "stylelint-config-suitcss"
}
