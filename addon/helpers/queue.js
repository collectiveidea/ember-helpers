import { helper } from '@ember/component/helper';
import isPromise from "../utils/is-promise";

export function queue(actions = []) {
	return function(...args) {

		return actions.reduce((val, fnc, idx) => {

			if (idx === 0) {
				if (typeof fnc === 'function') {
					return fnc(...args);
				}
				return fnc(...args);
			}

			if (isPromise(val)) {
				return val.then(() => fnc(...args));
			}

			if (typeof fnc === 'function') {
				return fnc(...args);
			}

			return fnc;

		}, undefined);

	};
}

export default helper(queue);
