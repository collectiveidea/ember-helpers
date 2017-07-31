import Ember from 'ember';

export default Ember.Helper.extend({

	router: Ember.computed(function() {
		return Ember.getOwner(this).lookup('router:main');
	}).readOnly(),

	compute([method, ...params]) {
		let router = Ember.get(this, 'router');
		return (...passed) => {
			return router.send(method, ...params, ...passed);
		};
	}

});
