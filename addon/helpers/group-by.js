import Ember from 'ember';

export default Ember.Helper.extend({

	compute([path, array]) {
		this.set('path', path);
		this.set('array', array);
		return this.get('content');
	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	pathDidChange: Ember.observer('path', 'value', function() {

		let path = Ember.get(this, 'path');

		if ( Ember.isEmpty(path) ) {
			Ember.defineProperty(this, 'content', null);
			return;
		}

		Ember.defineProperty(this, 'content', Ember.computed(`array.@each.${path}`, function() {

			let path = Ember.get(this, 'path');
			let array = Ember.get(this, 'array');
			let groups = Ember.Object.create();

			array.forEach(item => {

				let value = Ember.get(item, path);
				let group = Ember.get(groups, value);

				if ( !Ember.isArray(group) ) {
					group = Ember.A();
					Ember.set(groups, value, group);
				}

				group.push(item);

			});

			return groups;

		}));

	}),

});
