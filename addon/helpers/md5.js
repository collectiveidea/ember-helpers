import { helper } from '@ember/component/helper';
import crypto from "../utils/md5";

export function md5(params) {
	return crypto(params[0]);
}

export default helper(md5);
