import Ember from 'ember';

export function titleize([value='']) {
	return String(value).toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function($1) { return $1.toUpperCase(); });
}

export default Ember.Helper.helper(titleize);
