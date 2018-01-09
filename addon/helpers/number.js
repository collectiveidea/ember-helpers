import { helper } from '@ember/component/helper';
import format from '../utils/format';

export function number(params, hash) {
	return format(params[0], hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default helper(number);
