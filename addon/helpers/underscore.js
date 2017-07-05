import Ember from 'ember';

export function underscore([value='']) {
	return Ember.String.underscore( String(value) );
}

export default Ember.Helper.helper(underscore);
