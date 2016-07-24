import Ember from 'ember';

export function nontains(params) {
	return params[0].indexOf(params[1]) === -1;	
}

export default Ember.Helper.helper(nontains);