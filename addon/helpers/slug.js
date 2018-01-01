import { helper } from '@ember/component/helper';

export function slug([value='']) {
	return String(value).replace(/['"]/gi, '').replace(/[\s.]/gi, '-').replace(/(?![a-zA-Z0-9])/gi, '').toLowerCase();
}

export default helper(slug);
