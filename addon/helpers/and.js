import Ember from 'ember';

export function and(params) {
	return params.every(p => !!p);
}

export default Ember.Helper.helper(and);
