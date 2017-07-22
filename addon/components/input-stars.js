import Ember from 'ember';
import layout from 'ember-helpers/templates/components/input-stars';

export default Ember.Component.extend({

	layout,

	min: 1,

	max: 5,

	value: 0,

	colour: '#444',

	disabled: false,

	tagName: 'input-stars',

	stars: Ember.computed('min', 'max', function() {
		let stars = Ember.A();
		for ( var i = this.get('min'); i<= this.get('max'); i++ ) {
			stars.pushObject( Ember.Object.create({ value: i }) );
		}
		return stars;
	}),

	fills: Ember.on('init', Ember.observer('value', function() {
		this.get('stars').forEach( (star) => {
			star.set('selected', this.get('value') >= star.value);
		});
	})),

	actions: {

		toggle(value) {

			if (this.disabled) return;

			if (this.get('value') === value) {
				this.decrementProperty('value');
			} else {
				this.set('value', value);
			}

			this.sendAction('change', this.get('value'));

		}

	}

});
