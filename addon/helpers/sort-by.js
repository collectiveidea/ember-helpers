import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...props]) {

		let sort = props.slice(0, -1);
		let array = props.slice().pop();

		if ( Ember.isArray(sort[0]) || Ember.typeOf(sort[0]) === 'function') {
			sort = sort[0];
		}

		this.set('sort', sort);
		this.set('array', array);

		return this.get('content');

	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	sortDidChange: Ember.observer('sort', function() {

		let sort = Ember.get(this, 'sort');

		if ( Ember.isEmpty(sort) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		if (typeof sort === 'function') {
			Ember.defineProperty(this, 'content', Ember.computed.sort('array', sort));
		} else {
			Ember.defineProperty(this, 'content', Ember.computed.sort('array', 'sort'));
		}

	}),

});
