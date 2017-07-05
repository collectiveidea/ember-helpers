import Ember from 'ember';

export function capitalize([value='']) {
	return Ember.String.capitalize( String(value) );
}

export default Ember.Helper.helper(capitalize);
