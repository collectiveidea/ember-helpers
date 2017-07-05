import Ember from 'ember';

export function slug([value='']) {
	return String(value).replace(/'/gi, '').replace(/"/gi, '').replace(/\s/gi, '-').replace(/(?![a-zA-Z0-9])/gi, '').toLowerCase();
}

export default Ember.Helper.helper(slug);
