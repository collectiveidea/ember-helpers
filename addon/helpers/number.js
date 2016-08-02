import Ember from 'ember';
import format from 'ember-helpers/utils/format';

export function number(params, hash) {
	return format(params[0], hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default Ember.Helper.helper(number);
