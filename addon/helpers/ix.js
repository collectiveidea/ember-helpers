import Ember from 'ember';

export function ix(params) {
	return params.every(p => p !== true);
}

export default Ember.Helper.helper(ix);