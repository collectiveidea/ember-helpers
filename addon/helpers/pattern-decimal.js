import { helper } from '@ember/component/helper';

export function patternDecimal() {
	return '([+|-])?([0-9.]+)';
}

export default helper(patternDecimal);
