import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: service(),

	compute([method, ...params]) {
		let router = this.get('router');
		return (...passed) => {
			return router.send(method, ...params, ...passed);
		};
	}

});
