import { helper } from '@ember/component/helper';

export function patternTwitter() {
	return '[a-zA-Z0-9_]+';
}

export default helper(patternTwitter);
