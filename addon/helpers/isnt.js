import Ember from 'ember';

export function isnt(params) {
	return params.every(p => p !== true);
}

export default Ember.Helper.helper(isnt);
