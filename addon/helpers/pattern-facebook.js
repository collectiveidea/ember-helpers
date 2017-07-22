import Ember from 'ember';

export function patternFacebook() {
	return '[a-zA-Z0-9.]+';
}

export default Ember.Helper.helper(patternFacebook);
