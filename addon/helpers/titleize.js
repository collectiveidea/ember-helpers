import Ember from 'ember';

export function titleize(params) {
	return (params[0] + '').toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function($1) { return $1.toUpperCase(); });
}

export default Ember.Helper.helper(titleize);
