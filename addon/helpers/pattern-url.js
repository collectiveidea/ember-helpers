import Ember from 'ember';

export function patternUrl() {
	return '[a-zA-Z0-9-+@_:~?#!&,./()$*]+';
}

export default Ember.Helper.helper(patternUrl);
