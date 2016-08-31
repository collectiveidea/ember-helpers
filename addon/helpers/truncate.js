import Ember from 'ember';

export function truncate([str, length]) {
	return String(str).length > parseInt(length) ? String(str).substring( 0, parseInt(length) ) + '...' : str;
}

export default Ember.Helper.helper(truncate);
