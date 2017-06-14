import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {

		let props = params.slice(0, -2);
		let array = params.slice(-1)[0];
		let value = params.slice(-2)[0];

		this.set('props', props);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	searchDidChange: Ember.observer('props', 'value', function() {

		let props = Ember.get(this, 'props');
		let value = Ember.get(this, 'value');

		if ( Ember.isEmpty(props) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		if (!value) {
			Ember.defineProperty(this, 'content', Ember.computed.uniq('array'));
			return;
		}

		if (!Ember.isArray(props)) {
			Ember.defineProperty(this, 'content', Ember.computed.filter('array'));
			return;
		}

		let found = String(value).toLowerCase().split(' ');

		Ember.defineProperty(this, 'content', Ember.computed.filter('array', item => {
			return props.any(prop => {
				let value = String( item.get(prop) ).toLowerCase();
				return found.any(i => value.includes(i) );
			});
		}));

	}),

});
