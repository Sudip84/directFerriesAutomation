const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  video:true,
  env: {
    baseUrl: "https://openferry.com/",
    stepDefinitions: "cypress/support/step_definitions/**/*.js"
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    specPattern: "cypress/integration/features/**/*.feature",
    experimentalStudio: true,
    retries: {
      runMode: 2,  // Retries failed tests 2 times in headless mode (`npm run test`)
      openMode: 1   // Retries failed tests 1 time in interactive mode (`npx cypress open`)
    },
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
