import { helper } from '@ember/component/helper';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

export function toggle([obj, prop, ...values]) {
	return function() {

		if ( isPresent(values) ) {
			let idx = values.indexOf( get(obj, prop) );
			let nxt = values[idx+1] || values[0];
			return set(obj, prop, nxt);
		}

		return set(obj, prop, !get(obj, prop));

	};
}

export default helper(toggle);
