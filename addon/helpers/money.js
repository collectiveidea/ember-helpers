import { helper } from '@ember/component/helper';

export function money(params, hash) {
	return Number(params[0]).toLocaleString([], { style: 'currency', currency: hash.symbol, useGrouping: true });
}

export default helper(money);
