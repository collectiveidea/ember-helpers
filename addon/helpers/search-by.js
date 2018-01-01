import { isArray } from '@ember/array';
import { uniq, filter } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

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

		if ( isEmpty(props) ) {
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

		let found = String(value).toLowerCase().split(' ');

		defineProperty(this, 'content', filter('array', item => {
			return props.any(prop => {
				let value = String( item.get(prop) ).toLowerCase();
				return found.any(i => value.includes(i) );
			});
		}));

	}),

});
