import Ember from 'ember';

export default Ember.Helper.extend({

	router: Ember.computed(function() {
		return Ember.getOwner(this).lookup('router:main');
	}).readOnly(),

	compute(params, hash) {
		let router = this.get('router');
		return function(...passed) {
			return router.transitionTo(...params, ...passed, { queryParams: hash });
		};
	}

});
