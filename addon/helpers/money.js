import { helper } from '@ember/component/helper';

export function money(params, hash = { style: 'currency', currency: 'USD' }) {
	return Number(params[0]).toLocaleString([], hash);
}

export default helper(money);
