import Helper from '@ember/component/helper';
import RSVP from 'rsvp';

export default Helper.extend({

	compute(args, promises) {
		return RSVP.hash(promises);
	},

});
