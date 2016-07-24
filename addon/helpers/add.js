import Ember from 'ember';

export function add(params) {
	return params.reduce((a, b) => a + b);
}

export default Ember.Helper.helper(add);