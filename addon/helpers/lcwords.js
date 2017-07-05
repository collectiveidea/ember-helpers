import Ember from 'ember';

export function lcwords([value='']) {
	return String(value).replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) { return $1.toLowerCase(); });
}

export default Ember.Helper.helper(lcwords);
