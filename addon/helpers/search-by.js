import Ember from 'ember';
import search from 'ember-helpers/utils/search';

export default Ember.Helper.extend({

	compute([...props]) {

		let array = props.pop();
		let value = props.pop();

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
