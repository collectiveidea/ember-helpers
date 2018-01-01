import { helper } from '@ember/component/helper';

export function patternPhone() {
	return '([+])?([0-9() ]+)';
}

export default helper(patternPhone);
