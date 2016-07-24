import Ember from 'ember';

export function ceil(params) {
	return Math.ceil(params[0]);
}

export default Ember.Helper.helper(ceil);