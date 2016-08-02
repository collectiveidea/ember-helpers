import Ember from 'ember';

export function round(params) {
	return Math.round(params[0]);
}

export default Ember.Helper.helper(round);
