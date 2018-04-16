'use strict';

module.exports = {
    name: 'ember-cli-icon-rating',

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
