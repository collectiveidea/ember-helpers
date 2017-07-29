import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Helper.extend({

	compute(...promises) {
		return RSVP.race(promises);
	},

});
