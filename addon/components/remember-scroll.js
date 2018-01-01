import $ from 'jquery';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({

	scroller: service(),

	didInsertElement() {
		this._super(...arguments);
		let key = this.get('key');
		let pos = this.get('scroller')[key] || 0;
		$(document).scrollTop(pos);
	},

	willDestroyElement() {
		this._super(...arguments);
		let key = this.get('key');
		let pos = $(document).scrollTop();
		this.get('scroller')[key] = pos;
	},

});
