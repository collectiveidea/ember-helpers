import Ember from 'ember';

export function ix(params) {
	return params[0] !== true;
}

export default Ember.Helper.helper(ix);