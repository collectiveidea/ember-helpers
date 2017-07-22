import Ember from 'ember';

export function patternCurrency() {
	return '[A-Z]{3}';
}

export default Ember.Helper.helper(patternCurrency);
