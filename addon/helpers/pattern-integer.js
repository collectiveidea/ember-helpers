import { helper } from '@ember/component/helper';

export function patternInteger() {
	return '([+|-])?([0-9]+)';
}

export default helper(patternInteger);
