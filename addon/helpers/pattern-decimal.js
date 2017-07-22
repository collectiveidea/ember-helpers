import Ember from 'ember';

export function patternDecimal() {
	return '([+|-])?([0-9.]+)';
}

export default Ember.Helper.helper(patternDecimal);
