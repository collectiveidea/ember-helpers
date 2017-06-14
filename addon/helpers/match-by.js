import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {

		let props = params.slice(0, -2);
		let model = params.slice(-1)[0];
		let value = params.slice(-2)[0];

		this.set('props', props);
		this.set('value', value);
		this.set('model', model);

		return this.get('match');

	},

	changed: Ember.observer('match', function() {
		this.recompute();
	}),

	searchDidChange: Ember.observer('props', 'value', 'model', function() {

		let props = Ember.get(this, 'props');
		let value = Ember.get(this, 'value');
		let model = Ember.get(this, 'model');

		if ( Ember.isEmpty(props) ) {
			Ember.set(this, 'match', true);
			return;
		}

		if (!value) {
			Ember.set(this, 'match', true);
			return;
		}

		if (!model) {
			Ember.set(this, 'match', true);
			return;
		}

		if (!Ember.isArray(props)) {
			Ember.set(this, 'match', true);
			return;
		}

		let found = String(value).toLowerCase().split(' ');

		Ember.set(this, 'match', props.any(prop => {
			let value = String( model.get(prop) ).toLowerCase();
			return found.any(i => value.includes(i) );
		}));

	}),

});
