import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('arrays.[]', function() {
		this.recompute();
	}),

	compute([...arrays]) {
		this.set('arrays', arrays);
		return arrays.reduce( (prev, array) => {
			return Ember.A(array).toArray().concat(prev);
		}, []);
	},

});

/*
import Ember from 'ember';

const cp = (key) => `${key}.[]`;
const id = (array) => `__array-${Ember.guidFor(array)}`;

export default Ember.Helper.extend({

	compute([...arrays]) {
		this.set('arrays', arrays.map(array => {
			return Ember.A(array).toArray();
		}));
		return this.get('content');
	},

	changed: Ember.observer('content.[]', function() {
		this.recompute();
	}),

	arraysDidChange: Ember.observer('arrays.[]', function() {

		let arrs = Ember.get(this, 'arrays');
		let deps = arrs.map(id).map(cp);

		if ( Ember.isEmpty(arrs) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		arrs.forEach(arr => Ember.set(this, id(arr), arr));

		Ember.defineProperty(this, 'content', Ember.computed(...deps, function() {
			let arrays = deps.map(key => {
				let value = Ember.get(this, key);
				return Ember.A(value).toArray();
			});
			return arrays.reduce( (prev, array) => {
				return Ember.A(array).toArray().concat(prev);
			}, []);
		}));

	}),

});
*/
