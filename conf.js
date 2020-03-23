exports.config = {
  // set to "custom" instead of cucumber.
  framework: "custom",

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"]
    },
    // Add this
    metadata: {
      browser: {
        name: "chrome",
        version: ""
      },
      device: "Window 10",
      platform: {
        name: "Window",
        version: "10.12.6"
      }
    }
  },
  // require feature files
  specs: [
    "./e2e/feature/cimb.feature"
    //"./e2e/feature/cimbBank.feature"
    // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      "./e2e/cimbStepDefinition/cimb_step.js",
      //"./e2e/cimbStepDefinition/cimbBank_step.js",
      "./env.js" // accepts a glob
    ],
    // Tell CucumberJS to save the JSON report
    //format: ["json:cucumberReports/results.json", "pretty"],
    strict: true
  },

  plugins: [
    {
      package: "protractor-multiple-cucumber-html-reporter-plugin",
      options: {
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
      }
    }
  ]
};
