import { helper } from '@ember/component/helper';

export function email([value]) {
	return String('mailto:'+value).replace(/[\u00A0-\u9999<>&]/gim, (i) => {
		return `&#${i.charCodeAt(0)};`;
	});
}

export default helper(email);
