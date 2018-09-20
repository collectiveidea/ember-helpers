import { helper } from '@ember/component/helper';
import { copy } from '@ember/object/internals';

export function percent(params, hash = { style: 'percent' }) {
	let options = copy(hash);
	options.style = 'percent';
	return Number(params[0]).toLocaleString([], options);
}

export default helper(percent);
