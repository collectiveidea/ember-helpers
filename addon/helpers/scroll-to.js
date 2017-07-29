import Ember from 'ember';

export default Ember.Helper.extend({

	compute(args, { position = 0, duration = 0, element, container }) {
		return function() {

			if (element) {
				position = Ember.$(element).offset().top;
			}

			if (container) {
				container = Ember.$(container);
			} else {
				container = Ember.$(document);
			}

			if (duration > 0) {
				container.aniate({ scrollTop: position }, duration);
			} else {
				container.scrollTop(position);
			}

		};
	}

});
