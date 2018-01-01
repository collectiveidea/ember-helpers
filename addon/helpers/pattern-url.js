import { helper } from '@ember/component/helper';

export function patternUrl() {
	return '[a-zA-Z0-9-+@_:~?#!&,./()$*]+';
}

export default helper(patternUrl);
