import Ember from 'ember';

export function lcwords(params) {
	return (params[0] + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) { return $1.toUpperCase(); });
}

export default Ember.Helper.helper(lcwords);
