# ember-cli-icon-rating

[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-icon-rating.svg)](http://emberobserver.com/addons/ember-cli-icon-rating)
[![Build Status](https://travis-ci.org/devotox/ember-cli-icon-rating.svg)](http://travis-ci.org/devotox/ember-cli-icon-rating)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-icon-rating/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-icon-rating)
[![NPM Version](https://badge.fury.io/js/ember-cli-icon-rating.svg)](http://badge.fury.io/js/ember-cli-icon-rating)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-icon-rating.svg)](https://www.npmjs.org/package/ember-cli-icon-rating)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-icon-rating.svg)](https://david-dm.org/poetic/ember-cli-icon-rating)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-icon-rating/dev-status.svg)](https://david-dm.org/poetic/ember-cli-icon-rating#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-icon-rating.svg)](https://greenkeeper.io/)

## Description
Rating Input that can use any [Font Awesome Icon](http://fontawesome.io/icons/) and defaults to using the star icon

[DEMO](http://devotox.github.io/ember-cli-icon-rating)

## Installation
* `ember install ember-cli-icon-rating`

## Usage
* Note: Uses DDAU so no updates are done without an onClick handler

Simplest Case

```handlebars
{{icon-rating
  value=value
  onClick=(action (mut value))
}}
```

Full Example
```handlebars
{{icon-rating
  min=5
  max=10
  size=4
  value=5
  icon='dollar'
  readOnly=true
  baseColor='red'
  fillColor='green'
  onClick=(action 'updateValue')
}}
```

### Component Options Available
* max - Number of stars
* readOnly - handlers will not run
* value - Number of stars selected
* icon - Font Awesome icon to use for rating
* size - size of star, i.e. lg, 2 - 5 (see Font Awesome docs)
* baseColor - any rgb, hex, string color to be used as the initial color before selection
* fillColor - any rgb, hex, string color to be used as the hover color or after selection


#### License
MIT license.
