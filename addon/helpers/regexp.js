import Ember from 'ember';

export function regexp([pattern='', flags='']) {
	return new RegExp(pattern, flags);
}

export default Ember.Helper.helper(regexp);
