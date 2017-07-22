import Ember from 'ember';

export function patternLetters() {
	return '[a-zA-Z]+';
}

export default Ember.Helper.helper(patternLetters);
