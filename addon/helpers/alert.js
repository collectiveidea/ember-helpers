import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.alert( params.concat(passed).join(' ') );
		};
	}

});
