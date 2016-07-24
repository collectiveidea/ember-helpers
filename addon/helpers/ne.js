import Ember from 'ember';

export function ne(params) {
	return params[0] !== params[1];
}

export default Ember.Helper.helper(ne);