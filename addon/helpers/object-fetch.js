import Helper from '@ember/component/helper';
import { get } from '@ember/object';

export default Helper.extend({

	compute([key]) {
		return (obj) => {
			return get(obj, key);
		};
	},

});
