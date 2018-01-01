import { set, observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([obj, key, val]) {
		this.set('val', val);
		set(obj, key, val);
	},

	changed: observer('val', function() {
		this.recompute();
	}),

});
