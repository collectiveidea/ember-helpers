import { helper } from '@ember/component/helper';
import { tryInvoke } from '@ember/utils';
import { all } from 'rsvp';
import { isArray } from '@ember/array';

export function invoke([method, object, ...args]) {

	if ( isArray(object) ) {
		return function() {
			return all(
				object.map(i => tryInvoke(i, method, args))
			);
		};
	}

	return function() {
		return tryInvoke(object, method, args);
	};

}

export default helper(invoke);
