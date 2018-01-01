import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.prompt( params.concat(passed).join(' ') );
		};
	}

});
