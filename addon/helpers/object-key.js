import Ember from 'ember';

export default Ember.Helper.extend({

	compute([key, obj]) {
		this.set('key', key);
		this.set('obj', obj);
		return this.get('content');
	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	keyDidChange: Ember.observer('key', function() {

		let key = Ember.get(this, 'key');

		if ( Ember.isEmpty(key) ) {
			Ember.defineProperty(this, 'content', null);
			return;
		}

		Ember.defineProperty(this, 'content', Ember.computed.oneWay(`obj.${key}`));

	}),

});
