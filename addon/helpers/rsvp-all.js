import Helper from '@ember/component/helper';
import RSVP from 'rsvp';

export default Helper.extend({

	compute(...promises) {
		return RSVP.all(promises);
	},

});
