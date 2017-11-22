import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: service(),

	compute(params, hash) {
		let router = this.get('router');
		return function(...passed) {
			return router.transitionTo(...params, ...passed, { queryParams: hash });
		};
	}

});
