import { helper } from '@ember/component/helper';

export function number(params, hash = { style: 'decimal' }) {
	return Number(params[0]).toLocaleString([], hash);
}

export default helper(number);
