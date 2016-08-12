import Ember from 'ember';

export function array([...params]) {
	return Ember.A(params);
}

export default Ember.Helper.helper(array);
