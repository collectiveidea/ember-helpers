import Ember from 'ember';

export function or(params) {
	return params.any(p => !!p);
}

export default Ember.Helper.helper(or);