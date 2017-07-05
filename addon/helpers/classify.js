import Ember from 'ember';

export function classify([value='']) {
	return Ember.String.classify( String(value) );
}

export default Ember.Helper.helper(classify);
