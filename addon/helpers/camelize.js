import Ember from 'ember';

export function camelize([value='']) {
	return Ember.String.camelize( String(value) );
}

export default Ember.Helper.helper(camelize);
