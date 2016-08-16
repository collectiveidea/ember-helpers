import Ember from 'ember';

export function concat(params) {
	return params.join('');
}

export default Ember.Helper.helper(concat);
