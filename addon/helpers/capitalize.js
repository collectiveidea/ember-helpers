import Ember from 'ember';

export function capitalize([value='']) {
	Ember.String.capitalize(value+'');
}

export default Ember.Helper.helper(capitalize);
