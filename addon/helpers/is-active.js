import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	router: computed(function() {
		return getOwner(this).lookup('router:main');
	}).readOnly(),

	compute([...params]) {
		return this.get('router').isActive(...params);
	}

});
