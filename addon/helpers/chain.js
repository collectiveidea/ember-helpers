import Ember from 'ember';
import isPromise from "ember-helpers/utils/is-promise";

export function chain(actions = []) {
	return function(...args) {

		return actions.reduce((val, fnc, idx) => {

			if (idx === 0) {
				return fnc(...args);
			}

			if (isPromise(val)) {
				return val.then(fnc);
			}

			return fnc(val);

		}, undefined);

	};
}

export default Ember.Helper.helper(chain);