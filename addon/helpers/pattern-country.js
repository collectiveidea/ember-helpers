import { helper } from '@ember/component/helper';

export function patternCountry() {
	return '[A-Z]{3}';
}

export default helper(patternCountry);
