import Ember from 'ember';

export default Ember.Helper.extend({

	compute([fnc, ...params]) {
		return () => fnc.call(this, ...params);
	}

});
