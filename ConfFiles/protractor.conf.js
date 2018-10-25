require("babel-register")({
    presets: [ 'es2015' ]
});

const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const env = process.env.env || 'local';
const fs = require("fs");
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;


exports.config = {
    directConnect: true,
    seleniumAddress : 'http://localhost:4444/wd/hub',
    framework: 'jasmine',

    // specs: ['../SpecFiles/*.js'],
    specs: ['../SpecFiles/homePage_spec.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    params: {
        login: {
            user: 'protractor-br',
            password: '#ng123#'
        }
    },

    baseUrl: 'https://www.google.com',
    rootElement: 'html',

    allScriptsTimeout: 30000,

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displaySuccessful: true,
                displayFailed: true,
                displayErrorMessages: true,
                displayStacktrace: true,
                displayNumber: true,
                displayDuration: true,
            },
            summary: {
                displaySuccessful: true,
                displayFailed: true,
                displayErrorMessages: true,
                displayStacktrace: true,
                displayNumber: true,
                displayDuration: true,
            },
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));
    },

};