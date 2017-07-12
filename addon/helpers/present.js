import Ember from 'ember';

export function present(params) {
	return params.every(p => Ember.isPresent(p));
}

export default Ember.Helper.helper(present);
