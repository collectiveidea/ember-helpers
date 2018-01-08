import { A, isArray } from '@ember/array';
import { uniq, filter } from '@ember/object/computed';
import { isEmpty, typeOf } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

function isString(value) {
	return typeOf(value) === 'string';
}

export default Helper.extend({

	compute([...params]) {

		let props = params.slice(0, -2);
		let array = params.slice(-1)[0];
		let value = params.slice(-2)[0];

		this.set('props', props);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	searchDidChange: observer('props', 'value', function() {

		let props = get(this, 'props');
		let value = get(this, 'value');

		if (typeOf(value) === 'string') {
			value = value.toLowerCase().split(' ');
		}

		if (isEmpty(props)) {
			defineProperty(this, 'content', []);
			return;
		}

		if (!value) {
			defineProperty(this, 'content', uniq('array'));
			return;
		}

		if (!isArray(props)) {
			defineProperty(this, 'content', filter('array'));
			return;
		}

		if (!isArray(value)) {
			defineProperty(this, 'content', filter('array'));
			return;
		}

		defineProperty(this, 'content', filter('array', item => {
			return A(props).any(prop => {

				let field = get(item, prop);

				if (isString(field)) {
					return A(value).any(i => field.toLowerCase().includes(i) );
				}

				if (isArray(field)) {
					return A(value).any(i => A(field).any(f => f.toLowerCase().includes(i) ));
				}

			});
		}));

	}),

});
