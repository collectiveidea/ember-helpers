import Ember from 'ember';
import md5 from "md5";

export default Ember.Helper.extend({

	compute([name, text, icon], hash) {
		return () => {

			let n = typeof name == 'function' ? name() : name;
			let t = typeof text == 'function' ? text() : text;
			let i = typeof icon == 'function' ? icon() : icon;

			if (!window.Notification) {
				return;
			}

			if (window.Notification.permission === 'deined') {
				return;
			}

			if (window.Notification.permission === 'default') {
				return window.Notification.requestPermission( () => {
					this.notify(n, t, i);
				});
			}

			if (window.Notification.permission === 'granted') {
				this.notify(n, t, i);
			}

		};
	},

	notify(name, text, icon) {

		let n = new Notification(name, { icon: icon, body: text });

		n.onclick = function() {
			this.close(); window.focus();
		};

		n.onshow = function() {
			setTimeout(() => { this.close(); }, hash.timeout || 10000);
		};

	}

});