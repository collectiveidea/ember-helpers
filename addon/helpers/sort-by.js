import { sort } from '@ember/object/computed';
import { observer, get, defineProperty } from '@ember/object';
import { typeOf, isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...props]) {

		let param = props.slice(0, -1);
		let array = props.slice().pop();

		if ( isArray(param[0]) || typeOf(param[0]) === 'function') {
			param = param[0];
		}

		this.set('param', param);
		this.set('array', array);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	sortDidChange: observer('param', function() {

		let param = get(this, 'param');

		if ( isEmpty(param) ) {
			defineProperty(this, 'content', []);
			return;
		}

		if (typeof param === 'function') {
			defineProperty(this, 'content', sort('array', param));
		} else {
			defineProperty(this, 'content', sort('array', 'param'));
		}

	}),

});
