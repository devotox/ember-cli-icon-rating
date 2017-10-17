import Component from '@ember/component';

import layout from '../templates/components/icon-rating';

export default Component.extend({
	layout,

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
		const max = this.get('max');
		this.set('icons', [...Array(max).keys()].map(i => i + 1));
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
