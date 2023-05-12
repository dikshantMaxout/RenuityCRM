const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'padopx',
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: false,
  },
  env: {
    "testrail": {
      "domain": "bylte.testrail.io",
      "username": "DAgarwal@contractor.renuityhome.com",
      "password": "111Acute$",
      "runId": "1448",
      "projectId": "P14",
      "screenshots": true
    },
    "allureReuseAfterSpec": true,
    "allureResultsPath": "allure-results",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://i417ax.leadperfection.com/',
    setupNodeEvents(on, config) {
      return require('./cypress/support/index')(on, config)
    },
    specPattern: 'cypress/integration/RenuityCRM/tests/*.js'
  },
});
