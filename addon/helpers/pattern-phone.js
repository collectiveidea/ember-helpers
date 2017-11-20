import Ember from 'ember';

export function patternPhone() {
	return '([+])?([0-9() ]+)';
}

export default Ember.Helper.helper(patternPhone);
