import Helper from '@ember/component/helper';

export default Helper.extend({
	compute([value=0]) {
		return Math.abs(value);
	},
});
