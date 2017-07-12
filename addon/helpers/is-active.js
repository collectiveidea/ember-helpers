import Ember from 'ember';

export default Ember.Helper.extend({

	router: Ember.computed(function() {
		return Ember.getOwner(this).lookup('router:main');
	}).readOnly(),

	compute([...params]) {
		return this.get('router').isActive(...params);
	}

});
