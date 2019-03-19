import Component from '@ember/component';

import layout from '../templates/components/icon-rating';

const ucfirst = (value) => {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

const range = (left, right, step = 1, inclusive = true) => {
	let range = [];
	let ascending = left < right;
	let end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (let i = left; ascending ? i < end : i > end; ascending ? i += step : i -= step) {
		range.push(i);
	}
	return range;
};

export default Component.extend({
	layout,

	min: 1,

	max: 5,

	step: 1,

	value: 0,

	width: 0,

	hover: 0,

	rotate: 0,

	size: 'lg',

	icon: null,

	spin: false,

	pulse: false,

	color: null,

	border: false,

	inverse: false,

	pull: undefined, // left or right

	readOnly: false,

	baseIcon: 'star',

	fillIcon: 'star',

	fixedWidth: false,

	disableHover: false,

	fillColor: '#FFD700',

	baseColor: '#BDBDBD',

	showRatingAbove: false,

	showRatingBelow: false,

	iconComponent: 'fa-icon',

	onClick() { },

	init() {
		this._super(...arguments);

		const min = this.get('min');
		const max = this.get('max');
		const step = this.get('step');

		this.set('icons', range(min, max, step, true));
	},

	didReceiveAttrs() {
		this.setupProp('icon');
		this.setupProp('color');
	},

	setupProp(prop) {
		let propValue = this.get(prop);
		let ucProp = ucfirst(prop);

		propValue
			&& this.set(`base${ucProp}`, propValue)
			&& this.set(`fill${ucProp}`, propValue);
	},

	actions: {
		clickHandler(index) {
			!this.get('readOnly')
				&& this.onClick(index);
		},
		mouseEnterHandler(index) {
			!this.get('readOnly')
				&& !this.get('disableHover')
				&& this.set('hover', index);
		},
		mouseLeaveHandler() {
			!this.get('readOnly')
				&& !this.get('disableHover')
				&& this.set('hover', 0);
		}
	}
});
