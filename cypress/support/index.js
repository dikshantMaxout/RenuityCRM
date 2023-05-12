const TestRailReporter = require('cypress-testrail');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    new TestRailReporter(on, config).register();
    new allureWriter(on,config);
    return config
}
