import { helper } from '@ember/component/helper';

export function patternNumbers() {
	return '[0-9]+';
}

export default helper(patternNumbers);
