var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var fs = require('fs');
//var path = require('canonical-path');
var _ = require('lodash');

//var failFast = require('protractor-fail-fast');

exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  //seleniumServerJar: "E:\\NEXT\\StandaloneServer\\selenium-server-standalone-3.4.0.jar",
  chromeDriver: 'E:\\NEXT\\GeckoDriver\\chromedriver.exe',
  capabilities: {
    browserName: 'chrome',
    //shardTestFiles: true,
    count: 1,
    //maxInstances: 3,
    
    //chromeOptions: {
      //args: ["show-fps-counter=true"], // "--window-size=1366,768", "--headless"
      // mobileEmulation: {
      //   deviceName: "iPad",
      // }
    //},

  },
  //webDriverLogDir: "WebDriverLog",
  //maxSessions:2,
  //verboseMultiSessions: true,
  //baseUrl: "file:///E:/Workspace/TestApp/protractor-console-plugin/testapp/index.html",
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  // Spec patterns are relative to this config file
  //specs: ['./js/specs/check.e2e-spec.js' ],
  specs: ['./specs/spec.js'],
  //exclude: ['./js/specs/check.e2e-spec.js'],

  // suites: {
  
  // },

  //resultJsonOutputFile: 'output.json',
  //highlightDelay: 1000,
  // Base URL for application server
  //baseUrl: "file:///E:/Workspace/TestApp/protractor-console-plugin/testapp/index.html",
  // doesn't seem to work.
  // resultJsonOutputFile: "foo.json",

  // plugins: [{
  //   inline: require('protractor-console-plugin'),
  //   failOnWarning: false,//                (Default - false),
  //   failOnError: true,//                  (Default - true),
  //   logWarnings: true,//                  (Default - true),
  //   //exclude: {},//   (Default - [])
  // }],

  // plugins: [{
  //   package: 'protractor-timeline-plugin',
  //   inline: require('protractor-timeline-plugin'),
  //   // Output json and html will go in this folder.
  //   outdir: 'timelines',

  //   // Set the name of the html file. Defaults to index.html.
  //   outputHtmlFileName: 'results.html'

  //   // Optional - if sauceUser and sauceKey are specified, logs from
  //   // SauceLabs will also be parsed after test invocation.
  //   // sauceUser: 'Jane',
  //   // sauceKey: 'abcdefg'
  // }],

  // plugins: [{
  //   chromeA11YDevTools: {
  //     treatWarningsAsFailures: true,
  //     auditConfiguration: {
  //       auditRulesToRun: [
  //         'audioWithoutControls',
  //         'badAriaAttributeValue',
  //         'badAriaRole',
  //         'controlsWithoutLabel',
  //         'elementsWithMeaningfulBackgroundImage',
  //         'focusableElementNotVisibleAndNotAriaHidden',
  //         'imagesWithoutAltText',
  //         'linkWithUnclearPurpose',
  //         'lowContrastElements',
  //         'mainRoleOnInappropriateElement',
  //         'nonExistentAriaLabelledbyElement',
  //         'pageWithoutTitle',
  //         'requiredAriaAttributeMissing',
  //         'unfocusableElementsWithOnClick',
  //         'videoWithoutCaptions'
  //       ],
  //       auditRulesToSkip: []
  //     }
  //   },
  //   inline: require('protractor-accessibility-plugin'),
  // }],

  // plugins: [{
  //   axe: true,
  //   //package: 'protractor-accessibility-plugin'
  //   //inline: require('protractor-accessibility-plugin')
  //   inline: require('protractor-axe-report-plugin'),

  // }],

  // plugins: [{
  //   tenonIO: {
  //     options: {
  //       // See http://tenon.io/documentation/understanding-request-parameters.php 
  //       // options.src will be added by the test. 
  //     },
  //     printAll: false, // whether the plugin should log API response 
  //   },
  //   chromeA11YDevTools: true,
  //   inline: require('protractor-accessibility-plugin'),
  // }],

  // plugins: [{
  //   displayHelpUrl: false, // Displays the aXe help URL along with the error. Defaults to true. 
  //   displayContext: false, // Displays the HTML of interest. Defaults to true.
  //   displayPasses: true, // Display pass results. Defaults to true.
  //   displayViolations: true, // Display violations. Defaults to true.
  //   standardsToReport: ['wcag2a', 'wcag2aa'], // A list of standards to report on. If empty, reports on all standards.
  //   // List of standards: wcag2a, wcag411, section508, wcag131, section508a, wcag412, wcag241, wcag2aa, section508o, 
  //   // wcag143, wcag242, wcag311, wcag111, wcag332, section508n, best-practice, wcag211, wcag144
  //   ignoreAxeFailures: false, // If true, aXe failures won't cause the whole test to fail. Defaults to false
  //   // This change the result in following I/launcher: chrome #01 failed 3 test(s) . If true, fail of axe will not make this fail

  //   inline: require('protractor-axe-report-plugin'),
  // }],

  // plugins: [{
  //   axe: true,
  //   package: 'axe-core',
  // }],

  onPrepare: function () {
    let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    // debugging
    // console.log('browser.params:' + JSON.stringify(browser.params));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './_test-output'
    }))
    //protractor.browser.waitForAngularEnabled(false);
    //protractor.waitForAngularEnabled(false);
    //global.all = require('./all.js');
  },
  jasmineNodeOpts: {
    // defaultTimeoutInterval: 60000,
    defaultTimeoutInterval: 10000,
    showTiming: true,
    print: function () { }
  },

  // restartBrowserBetweenTests : true,

  // plugins: [
  //   failFast.init()
  // ],
  // afterLaunch: function() {
  //   failFast.clean(); // Removes the fail file once all test runners have completed.
  // },
};