import Ember from 'ember';

export function sub(params) {
	return params.reduce((a, b) => a - b);
}

export default Ember.Helper.helper(sub);
