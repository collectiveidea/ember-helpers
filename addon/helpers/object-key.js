import { oneWay } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([key, obj]) {
		this.set('key', key);
		this.set('obj', obj);
		return this.get('content');
	},

	changed: observer('content', function() {
		this.recompute();
	}),

	keyDidChange: observer('key', function() {

		let key = get(this, 'key');

		if ( isEmpty(key) ) {
			defineProperty(this, 'content', null);
			return;
		}

		defineProperty(this, 'content', oneWay(`obj.${key}`));

	}),

});
