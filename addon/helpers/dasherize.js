import Ember from 'ember';

export function dasherize([value='']) {
	return Ember.String.dasherize( String(value) );
}

export default Ember.Helper.helper(dasherize);
