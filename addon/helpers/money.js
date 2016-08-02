import Ember from 'ember';
import symbol from 'ember-helpers/utils/symbol';
import format from 'ember-helpers/utils/format';

export function money(params, hash) {
	return symbol(hash.symbol) + format(params[0], hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default Ember.Helper.helper(money);
