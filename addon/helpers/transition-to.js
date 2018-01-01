import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: computed(function() {
		return getOwner(this).lookup('router:main');
	}).readOnly(),

	compute(params, hash) {
		let router = this.get('router');
		return function(...passed) {
			return router.transitionTo(...params, ...passed, { queryParams: hash });
		};
	}

});
