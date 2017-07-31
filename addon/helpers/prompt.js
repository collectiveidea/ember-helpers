import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.prompt( params.concat(passed).join(' ') );
		};
	}

});
