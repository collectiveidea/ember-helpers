import { helper } from '@ember/component/helper';
import symbol from '../utils/symbol';
import format from '../utils/format';

export function money(params, hash) {
	return symbol(hash.symbol) + format(params[0], hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default helper(money);
