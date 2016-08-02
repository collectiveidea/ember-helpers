import Ember from 'ember';

export function floor(params) {
	return Math.floor(params[0]);
}

export default Ember.Helper.helper(floor);
