import Ember from 'ember';

export function sqrt(params) {
	return Math.sqrt(params[0]);
}

export default Ember.Helper.helper(sqrt);