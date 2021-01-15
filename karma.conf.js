// Karma configuration
// Generated on Thu Jul 30 2020 17:14:05 GMT+0800 (GMT+08:00)
const webConfig = require('./webpack.test');
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai', 'es6-shim', 'phantomjs-shim'],

    plugins: ['karma-es6-shim', 'karma-chai', 'karma-spec-reporter', 'karma-sourcemap-loader', 'karma-phantomjs-launcher2', 'karma-webpack', 'karma-coverage', 'karma-mocha', 'karma-phantomjs-shim', 'karma-sinon-chai'],
    // list of files / patterns to load in the browser
    files: [
      // {pattern: 'src/components/*.vue', watched: false},
      {pattern: 'test/**/*.spec.js', watched: false},
      // {pattern: 'test/**/*.spec.js', watched: false},
      // {pattern: 'test/main.js', watched: false},
      // {pattern: 'src/components/*.vue', watched: false},
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'src/components/*.vue': ['webpack', 'sourcemap'],
      'test/**/*.spec.js': ['coverage', 'webpack', 'sourcemap']
      // '**/*.vue': ['webpack', 'sourcemap'],
      // 'test/main.js': ['webpack', 'sourcemap'],
    },

    // client: {
    //   chai: {
    //     includeStack: true
    //   }
    // },

    webpack: webConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    coverageReporter: {
      dir: './coverage',
      reporters: [{type: 'lcov', subdir: '.'}, {type: 'text-summary'}]
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    captureTimeout: 60000, // it was already there
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 60000,//by default 10000
  })
}
