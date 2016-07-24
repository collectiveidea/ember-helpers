import Ember from 'ember';

export function is(params) {
	return params[0] === true;
}

export default Ember.Helper.helper(is);