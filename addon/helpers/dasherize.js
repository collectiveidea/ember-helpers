import Ember from 'ember';

export function dasherize([value='']) {
	Ember.String.dasherize(value+'');
}

export default Ember.Helper.helper(dasherize);
