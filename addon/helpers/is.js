import Ember from 'ember';

export function is(params) {
	return params.every(p => p === true);
}

export default Ember.Helper.helper(is);