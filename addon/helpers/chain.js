import { helper } from '@ember/component/helper';
import isPromise from "../utils/is-promise";

export function chain(actions = []) {
	return function(...args) {

		return actions.reduce((val, fnc, idx) => {

			if (idx === 0) {
				if (typeof fnc === 'function') {
					return fnc(...args);
				}
				return fnc;
			}

			if (isPromise(val)) {
				return val.then(fnc);
			}

			if (typeof fnc === 'function') {
				return fnc(val);
			}

			return fnc;

		}, undefined);

	};
}

export default helper(chain);
