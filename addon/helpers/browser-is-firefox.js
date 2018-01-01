import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default Helper.extend({

	browser: service(),

	compute() {
		return this.get('browser.firefox');
	},

});
