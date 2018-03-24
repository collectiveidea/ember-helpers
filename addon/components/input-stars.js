import Component from '@ember/component';
import { computed } from '@ember/object';
import { typeOf } from '@ember/utils';
import layout from '../templates/components/input-stars';

export default Component.extend({

	layout,

	min: 1,

	max: 5,

	value: 0,

	colour: '#444',

	disabled: false,

	tagName: 'input-stars',

	stars: computed('min', 'max', function() {
		let b = this.get('min');
		let e = this.get('max');
		return Array.apply(null, Array(e-b+1)).map( (_, n) => n + b );
	}),

	actions: {

		toggle(value) {

			if (this.disabled) return;

			if (this.get('value') === value) {
				this.decrementProperty('value');
			} else {
				this.set('value', value);
			}

			let func = this.get('on-change');

			if (typeOf(func) === 'function') {
				func(this.get('value'));
			}

		}

	}

});
