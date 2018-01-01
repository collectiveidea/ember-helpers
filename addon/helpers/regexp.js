import { helper } from '@ember/component/helper';

export function regexp([pattern='', flags='']) {
	return new RegExp(pattern, flags);
}

export default helper(regexp);
