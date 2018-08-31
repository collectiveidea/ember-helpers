import { helper } from '@ember/component/helper';

export function number(params) {
	return Number(params[0]).toLocaleString([], { style: 'decimal', useGrouping: true });
}

export default helper(number);
