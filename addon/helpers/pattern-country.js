import Ember from 'ember';

export function patternCountry() {
	return '[A-Z]{3}';
}

export default Ember.Helper.helper(patternCountry);
