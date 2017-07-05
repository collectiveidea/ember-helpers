import Ember from 'ember';

export function uppercase([value='']) {
	return String(value).toUpperCase();
}

export default Ember.Helper.helper(uppercase);
