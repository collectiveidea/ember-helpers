import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([name, text, icon], hash) {
		return () => {

			let n = typeof name === 'function' ? name() : name;
			let t = typeof text === 'function' ? text() : text;
			let i = typeof icon === 'function' ? icon() : icon;

			if (!window.Notification) {
				return;
			}

			if (window.Notification.permission === 'denied') {
				return;
			}

			if (window.Notification.permission === 'default') {
				return window.Notification.requestPermission( () => {
					this.notify(n, t, i, hash);
				});
			}

			if (window.Notification.permission === 'granted') {
				this.notify(n, t, i, hash);
			}

		};
	},

	notify(name, text, icon, hash) {

		let n = new Notification(name, { icon: icon, body: text });

		n.onclick = function() {
			this.close(); window.focus();
		};

		n.onshow = function() {
			setTimeout(() => { this.close(); }, hash.timeout || 10000);
		};

	}

});
