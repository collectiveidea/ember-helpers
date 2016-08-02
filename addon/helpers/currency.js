import Ember from 'ember';
import symbol from 'ember-helpers/utils/symbol';

export function currency(params) {
	return symbol(params[0]);
}

export default Ember.Helper.helper(currency);
