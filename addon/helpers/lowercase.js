import Ember from 'ember';

export function lowercase([value='']) {
	return String(value).toLowerCase();
}

export default Ember.Helper.helper(lowercase);
