import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...main]) {
		return function(...rest) {
			window.location.reload( main.join('') + rest.join('') );
			return;
		};
	}

});
