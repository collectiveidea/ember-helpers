import Ember from 'ember';

export function sanitize([value]) {
	return Ember.String.htmlSafe(value);
}

export default Ember.Helper.helper(sanitize);
