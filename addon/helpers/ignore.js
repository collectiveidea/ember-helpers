import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([fnc]) {
		return () => fnc.call(this);
	}

});
