import Ember from 'ember';

export function patternAlphanumeric() {
	return '[a-zA-Z0-9-+]+';
}

export default Ember.Helper.helper(patternAlphanumeric);
