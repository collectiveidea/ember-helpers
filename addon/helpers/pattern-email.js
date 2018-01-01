import { helper } from '@ember/component/helper';

export function patternEmail() {
	return '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
}

export default helper(patternEmail);
