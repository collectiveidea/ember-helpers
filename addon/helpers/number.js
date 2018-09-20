import { helper } from '@ember/component/helper';
import { copy } from '@ember/object/internals';

export function number(params, hash = { style: 'decimal' }) {
	let options = copy(hash);
	options.style = 'decimal';
	return Number(params[0]).toLocaleString([], options);
}

export default helper(number);
