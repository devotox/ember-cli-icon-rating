/* eslint-env node */

module.exports = {
    name: 'ember-cli-icon-rating',
    otherAssetPaths: [],

    options: {
        fingerprint: {
            enabled: false
        },
        babel: {
            plugins: ['transform-object-rest-spread']
        },
        'ember-cli-babel': {
            compileModules: true,
            includePolyfill: true,
            disableDebugTooling: true
        },
        'ember-font-awesome': {
            useScss: true,
            includeFontFiles: true,
            removeUnusedIcons: false,
            includeFontAwesomeAssets: true
        }
    },

    included() {
        this._super.included.apply(this, arguments);
    }
};