import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...main]) {
		return function(...rest) {
			window.location.reload( main.join('') + rest.join('') );
			return;
		};
	}

});
