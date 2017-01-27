import Ember from 'ember';
import search from 'ember-helpers/utils/search';

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

	propsDidChange: Ember.observer('props', function() {

		let props = Ember.get(this, 'props');

		if ( Ember.isEmpty(props) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		Ember.defineProperty(this, 'content', search('array', 'value', 'props'));

	}),

});
