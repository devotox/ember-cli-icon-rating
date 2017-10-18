import Component from '@ember/component';

import layout from '../templates/components/icon-rating';

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

	size: 'lg',

	icon: null,

	color: null,

	readOnly: false,

	baseIcon: 'star',

	fillIcon: 'star',

	disableHover: false,

	fillColor: '#FFD700',

	baseColor: '#BDBDBD',

	showRatingAbove: false,

	showRatingBelow: false,

	iconComponent: 'fa-icon',

	init() {
		this._super(...arguments);

		const min = this.get('min');
		const max = this.get('max');
		const step = this.get('step');

		this.setupIcon();
		this.setupColor();
		this.set('icons', range(min, max, step, true));
	},

	setupIcon() {
		let icon = this.get('icon');

		icon
			&& this.set('baseIcon', icon)
			&& this.set('fillIcon', icon);
	},

	setupColor() {
		let color = this.get('color');

		color
			&& this.set('baseColor', color)
			&& this.set('fillColor', color);
	},

	actions: {
		clickHandler(index) {
			!this.get('readOnly')
				&& this.sendAction('onClick', index);
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
