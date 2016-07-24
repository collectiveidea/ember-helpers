import Ember from 'ember';

export function isnt(params) {
	return params[0] !== true;
}

export default Ember.Helper.helper(isnt);