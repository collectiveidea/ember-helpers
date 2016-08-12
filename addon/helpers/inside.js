import Ember from 'ember';

export function inside([haystack, needle]) {
	return haystack.indexOf(needle) > -1;
}

export default Ember.Helper.helper(inside);
