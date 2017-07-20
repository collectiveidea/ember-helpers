import Ember from 'ember';
import range from 'ember-helpers/utils/int-range';

export default Ember.Helper.extend({

	compute([items]) {
		return function(item, options = {}) {

			let selected = items.get('selected');

			if (!Ember.isArray(selected)) {
				selected = items.set('selected', []);
			}

			if (!options.retain) {
				selected = items.set('selected', []);
			}

			if (options.toggle) {
				if (selected.includes(item)) {
					selected.removeObject(item);
				} else {
					selected.addObject(item);
				}
				items.notifyPropertyChange('selected');
				items.set('cursor', item);
				return;
			}

			if (options.range) {
				let bix = items.indexOf(item);
				let fix = items.indexOf(items.get('cursor'));
				let min = Math.max(0, Math.min(bix, fix));
				let max = Math.min(items.get('length')-1, Math.max(bix, fix));
				let idx = range(min, max);
				selected.addObjects( items.objectsAt(idx) )
				items.notifyPropertyChange('selected');
				items.set('cursor', item);
				return;
			}

			selected.addObject(item);
			items.notifyPropertyChange('selected');
			items.set('cursor', item);
			return;

		};
	},

});
