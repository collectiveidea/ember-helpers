import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {
		return (...parts) => {
			alert( params.join(' ') + parts.join(' ') );
		};
	}

});
