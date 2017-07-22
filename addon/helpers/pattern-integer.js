import Ember from 'ember';

export function patternInteger() {
	return '([+|-])?([0-9]+)';
}

export default Ember.Helper.helper(patternInteger);
