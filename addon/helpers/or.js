import Ember from 'ember';

export function or(params) {
	return params.some(p => !!p);
}

export default Ember.Helper.helper(or);
