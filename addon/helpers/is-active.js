import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: service(),

	compute([...params]) {
		return this.get('router').isActive(...params);
	}

});
