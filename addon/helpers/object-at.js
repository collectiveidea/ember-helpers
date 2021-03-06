import { isArray, A } from '@ember/array';
import { observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	changed: observer('array.[]', function() {
		this.recompute();
	}),

	compute([index, array]) {

		if ( !isArray(array) ) {
			return undefined;
		}

		this.set('array', array);

		return A(array).objectAt(index);

	},

});
