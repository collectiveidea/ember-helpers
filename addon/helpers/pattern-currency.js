import { helper } from '@ember/component/helper';

export function patternCurrency() {
	return '[A-Z]{3}';
}

export default helper(patternCurrency);
