import { htmlSafe } from '@ember/string';
import { helper } from '@ember/component/helper';

export function nl2br([value='']) {
	return htmlSafe(
		String(value).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2')
	);
}

export default helper(nl2br);
