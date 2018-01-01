import { getOwner } from '@ember/application';
import { computed, get } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: computed(function() {
		return getOwner(this).lookup('router:main');
	}).readOnly(),

	compute([method, ...params]) {
		let router = get(this, 'router');
		return (...passed) => {
			return router.send(method, ...params, ...passed);
		};
	}

});
