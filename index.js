'use strict';

const { name } = require('./package');

module.exports = {
    name,
    options: {
        babel: {
        },
        'ember-cli-babel': {
            compileModules: true,
            includePolyfill: true,
            disableDebugTooling: true
        },
        'ember-font-awesome': {
            useScss: true,
            includeComponent: true,
            includeFontFiles: true,
            removeUnusedIcons: false,
            includeFontAwesomeAssets: true
        }
    }
};
