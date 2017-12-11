import $ from 'jquery';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute(args, { position = 0, duration = 0, element, container }) {
		return function() {

			if (element) {
				position = $(element).offset().top;
			}

			if (container) {
				container = $(container);
			} else {
				container = $(document);
			}

			if (duration > 0) {
				container.animate({ scrollTop: position }, duration);
			} else {
				container.scrollTop(position);
			}

		};
	}

});
