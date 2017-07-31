import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.confirm( params.concat(passed).join(' ') );
		};
	}

});
