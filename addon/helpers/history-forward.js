import Ember from 'ember';

export default Ember.Helper.extend({

	compute() {
		return function() {
			window.history.forward();
			return;
		};
	}

});
