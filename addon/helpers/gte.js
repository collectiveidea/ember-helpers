import Ember from 'ember';

export function gte(params) {
	return params[0] >= params[1];
}

export default Ember.Helper.helper(gte);
