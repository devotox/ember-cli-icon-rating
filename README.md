[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-icon-rating.svg)](http://emberobserver.com/addons/ember-cli-icon-rating)
[![Build Status](https://travis-ci.org/devotox/ember-cli-icon-rating.svg)](http://travis-ci.org/devotox/ember-cli-icon-rating)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-icon-rating/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-icon-rating)
[![NPM Version](https://badge.fury.io/js/ember-cli-icon-rating.svg)](http://badge.fury.io/js/ember-cli-icon-rating)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-icon-rating.svg)](https://www.npmjs.org/package/ember-cli-icon-rating)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-icon-rating.svg)](https://david-dm.org/poetic/ember-cli-icon-rating)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-icon-rating/dev-status.svg)](https://david-dm.org/poetic/ember-cli-icon-rating#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-icon-rating.svg)](https://greenkeeper.io/)

ember-cli-icon-rating
==============================================================================

Rating Input that can use any [Font Awesome Icon](http://fontawesome.io/icons/) and defaults to using the star icon

[DEMO](http://devotox.github.io/ember-cli-icon-rating)

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-icon-rating
```

Usage
------------------------------------------------------------------------------

* Note: Uses DDAU so no updates are done without an onClick handler

Simplest Case

```handlebars
{{icon-rating
  value=value
  onClick=(action (mut value))
}}
```

Full Example (Defaults)
```handlebars
{{icon-rating
  min=1
  max=5
  step=1
  value=0
  width=0
  size='lg'
  readOnly=false
  baseIcon='star'
  fillIcon='star'
  baseColor='grey'
  fillColor='gold'
  disableHover=false
  showRatingAbove=false
  showRatingBelow=false
  icon=null // No Defaults for icon
  color=null // No Defaults for color
  onClick=null // No Defaults for onClick
}}
```

### Component Options Available
* min - Minumum icon value
* max - Maximum icon value
* readOnly - handlers will not run
* value - Number of icons selected
* width - Set width of individual icon container
* step - How much each consecutive icon value is
* showRatingAbove - Show Rating value above icon
* showRatingBelow - Show Rating rating below icon
* disableHover - Only update icon / color on click
* size - size of icon, i.e. lg, 2 - 5 (see Font Awesome docs)
* baseIcon - Font awesome icon to be used for the initial state
* fillIcon - Font awesome icon to be used on hover and after selection
* icon - Font Awesome icon to use for rating (overrides baseIcon / fillIcon)
* color - any rgb, hex, string color to be used (overrides baseColor / fillColor)
* baseColor - any rgb, hex, string color to be used as the initial color before selection
* fillColor - any rgb, hex, string color to be used as the hover color and after selection
* onClick - handler that runs when icon is clicked. Note: value does not change automatically

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
