import Ember from 'ember';

export function lcwords([value='']) {
	return String(value).split(' ').map(word => {
		return word.charAt(0).toLowerCase() + word.substring(1);
	}).join(' ');
}

export default Ember.Helper.helper(lcwords);
