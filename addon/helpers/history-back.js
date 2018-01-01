import Helper from '@ember/component/helper';

export default Helper.extend({

	compute() {
		return function() {
			window.history.back();
			return;
		};
	}

});
