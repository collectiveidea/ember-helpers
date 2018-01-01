import { helper } from '@ember/component/helper';

export function patternLetters() {
	return '[a-zA-Z]+';
}

export default helper(patternLetters);
