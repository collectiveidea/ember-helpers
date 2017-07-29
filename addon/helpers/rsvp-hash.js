import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Helper.extend({

	compute(args, promises) {
		return RSVP.hash(promises);
	},

});
