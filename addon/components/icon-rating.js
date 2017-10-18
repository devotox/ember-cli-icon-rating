import Component from '@ember/component';

import layout from '../templates/components/icon-rating';

const range = (left, right, inclusive) => {
	let range = [];
	let ascending = left < right;
	let end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
		range.push(i);
	}
	return range;
};

export default Component.extend({
	layout,

	min: 1,

	max: 5,

	value: 0,

	width: 0,

	hover: 0,

	size: 'lg',

	icon: 'star',

	readOnly: false,

	fillColor: '#FFD700',

	baseColor: '#BDBDBD',

	iconComponent: 'fa-icon',

	init() {
		this._super(...arguments);
		const min = this.get('min');
		const max = this.get('max');
		this.set('icons', range(min, max, true));
	},

	actions: {
		clickHandler(index) {
			!this.get('readOnly')
				&& this.sendAction('onClick', index);
		},
		mouseEnterHandler(index) {
			!this.get('readOnly')
				&& this.set('hover', index);
		},
		mouseLeaveHandler() {
			!this.get('readOnly')
				&& this.set('hover', 0);
		}
	}
});
