import { helper } from '@ember/component/helper';
import format from '../utils/format';

export function percent(params, hash) {
	return format(params[0] / params[1] * 100, hash.decimals, hash.decimalPoint, hash.thousandsSeparator);
}

export default helper(percent);
