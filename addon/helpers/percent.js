import Ember from 'ember';
import format from 'ember-helpers/utils/format';

export function percent(params, hash) {
    return format(params[0] / params[1] * 100, hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default Ember.Helper.helper(percent);