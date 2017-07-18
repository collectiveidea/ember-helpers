import Ember from 'ember';

export default Ember.Helper.extend({

	compute([fnc, ...params], { curry: curry=true }) {
		return function(passed) {
			if (curry) {
				params = params.concat(passed);
			}
			return fnc(...params);
		};
	}

});
