import Ember from 'ember';

export function replace([value='', search='', replace='']) {
	return String(value).replace(search, replace);
}

export default Ember.Helper.helper(replace);
