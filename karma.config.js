var webpack = require('karma-webpack');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            'tests/**/*spec.js',
        ],
        plugins: [
            webpack,
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-spec-reporter',
        ],
        browsers: ['Chrome'],
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'tests/**/*.js': ['webpack'],
        },
        reporters: ['coverage', 'spec'],
        coverageReporter: {
            reporters: [
                { type: 'text' },
            ]
        },
        webpack: {
            module: {
                preLoaders : [{
                    test: /\.(js|jsx)$/, 
                    exclude: /(node_modules)/,
                    loader: 'eslint-loader',
                }],
                loaders: [{
                    test: /\.(js|jsx)$/, 
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                }, {
                    test: /\.(js|jsx)$/, 
                    exclude: /(node_modules|spec)/,
                    loader: 'isparta-loader',
                }],
            },
            resolve: {
                extensions: ["", ".js"],
                modulesDirectories: ["./src", "./node_modules"],
            },
        },
        webpackMiddleware: { noInfo: true }
    });
};
