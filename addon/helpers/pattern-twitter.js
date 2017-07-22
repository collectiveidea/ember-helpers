import Ember from 'ember';

export function patternTwitter() {
	return '[a-zA-Z0-9_]+';
}

export default Ember.Helper.helper(patternTwitter);
