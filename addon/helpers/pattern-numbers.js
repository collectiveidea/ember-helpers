import Ember from 'ember';

export function patternNumbers() {
	return '[0-9]+';
}

export default Ember.Helper.helper(patternNumbers);
