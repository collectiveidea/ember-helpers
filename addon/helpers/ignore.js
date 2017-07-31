import Ember from 'ember';

export default Ember.Helper.extend({

	compute([fnc]) {
		return () => fnc.call(this);
	}

});
