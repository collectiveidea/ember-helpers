import { helper } from '@ember/component/helper';

export function patternFacebook() {
	return '[a-zA-Z0-9.]+';
}

export default helper(patternFacebook);
