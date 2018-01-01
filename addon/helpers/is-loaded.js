import { observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	changed: observer('object.isLoaded', function() {
		this.recompute();
	}),

	compute([object]) {
		this.set('object', object);
		return this.get('object.isLoaded');
	},

});
