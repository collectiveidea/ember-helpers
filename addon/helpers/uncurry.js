import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([fnc, ...params]) {
		return () => fnc.call(this, ...params);
	}

});
