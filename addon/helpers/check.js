import Ember from 'ember';

export default Ember.Helper.extend({

	compute([fnc]) {
		return (val, ...args) => val ? fnc(val, ...args) : null;
	}

});
