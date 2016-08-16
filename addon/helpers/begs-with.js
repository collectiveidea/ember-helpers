import Ember from 'ember';

export function begsWith([str, prefix]) {
	return String(str).indexOf( String(prefix) ) === 0;
}

export default Ember.Helper.helper(begsWith);
