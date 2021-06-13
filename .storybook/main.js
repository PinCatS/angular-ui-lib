module.exports = {
  "stories": [
    "../projects/**/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-angular-ivy"
  ],
  "core": {
    "builder": "webpack5"
  }
}
