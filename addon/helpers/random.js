import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([min, max]) {
		return function(params) {
			return Math.random(params[0] || min, params[1] || max);
		};
	}

});
