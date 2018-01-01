import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([fnc]) {
		return (val, ...args) => val ? fnc(val, ...args) : null;
	}

});
