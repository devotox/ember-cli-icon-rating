'use strict';

const { name } = require('./package');

module.exports = {
    name,
    options: {
        'ember-font-awesome': {
            useScss: true,
            includeComponent: true,
            includeFontFiles: false,
            removeUnusedIcons: false,
            includeFontAwesomeAssets: true
        }
    }
};
