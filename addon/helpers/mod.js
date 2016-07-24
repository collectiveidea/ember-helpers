import Ember from 'ember';

export function mod(params) {
	return params.reduce((a, b) => a % b);
}

export default Ember.Helper.helper(mod);