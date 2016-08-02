import Ember from 'ember';

export function slug(params) {
	return (params[0] + '').replace(/'/gi, '').replace(/"/gi, '').replace(/\s/gi, '-').replace(/(?![a-zA-Z0-9])/gi, '').toLowerCase();
}

export default Ember.Helper.helper(slug);
