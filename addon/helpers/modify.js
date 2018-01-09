import { isArray } from '@ember/array';
import Helper from '@ember/component/helper';
import range from '..utils/int-range';

export default Helper.extend({

	compute([object, items], { key = 'selected' }) {
		return function(item, options = {}) {

			let selected = object.get(key);

			if (!isArray(selected)) {
				selected = object.set(key, []);
			}

			if (options.toggle) {
				if (selected.includes(item)) {
					selected.removeObject(item);
				} else {
					selected.addObject(item);
				}
				object.notifyPropertyChange(key);
				object.set('cursor', item);
				return;
			}

			if (options.range) {
				let bix = items.indexOf(item);
				let fix = items.indexOf(object.get('cursor'));
				let min = Math.max(0, Math.min(bix, fix));
				let max = Math.min(items.get('length')-1, Math.max(bix, fix));
				let idx = range(min, max);
				selected.addObjects( items.objectsAt(idx) )
				object.notifyPropertyChange(key);
				object.set('cursor', item);
				return;
			}

			selected.clear();
			selected.addObject(item);
			object.notifyPropertyChange(key);
			object.set('cursor', item);
			return;

		};
	},

});
