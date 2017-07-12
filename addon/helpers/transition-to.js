import Ember from 'ember';

export default Ember.Helper.extend({

	router: Ember.computed(function() {
		return Ember.getOwner(this).lookup('router:main');
	}).readOnly(),

	compute([route, ...params], hash) {
		let router = this.get('router');
		return function(...passed) {
			router.transitionTo.apply(router, [route, ...params, ...passed, { queryParams: hash }]);
			return params.concat(passed);
		};
	}

});
