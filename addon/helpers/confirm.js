import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.confirm( params.concat(passed).join(' ') );
		};
	}

});
