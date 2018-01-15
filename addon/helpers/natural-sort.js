import { get } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([param], { numeric = false, caseFirst = 'false', sensitivity = 'base', ignorePunctuation = false }) {
		return function(one, two) {

			let [prop, dir] = String(param).split(':');

			let first = String( get(one, prop) );
			let secnd = String( get(two, prop) );

			let comps = first.localeCompare(secnd, undefined, {
				numeric,
				caseFirst,
				sensitivity,
				ignorePunctuation,
			});

			return (dir === 'desc') ? (-1 * comps) : comps;

		};
	}

});

