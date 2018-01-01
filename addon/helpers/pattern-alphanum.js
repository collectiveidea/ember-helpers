import { helper } from '@ember/component/helper';

export function patternAlphanumeric() {
	return '[a-zA-Z0-9-+]+';
}

export default helper(patternAlphanumeric);
