import { helper } from '@ember/component/helper';
import { A } from '@ember/array';

export function array([...params]) {
	return A(params);
}

export default helper(array);
