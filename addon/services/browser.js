import Ember from 'ember';

const enabled = window && window.$;

export default Ember.Service.extend({

	init() {

		this._super(...arguments);

		let name = 'unknown';
		let blink = this.isBlink();
		let chrome = this.isChrome();
		let edge = this.isEdge();
		let electron = this.isElectron();
		let explorer = this.isExplorer();
		let fastboot = this.isFastboot();
		let firefox = this.isFirefox();
		let opera = this.isOpera();
		let safari = this.isSafari();

		if (chrome)
			name = 'chrome';
		else if (edge)
			name = 'edge';
		else if (electron)
			name = 'electron';
		else if (explorer)
			name = 'explorer';
		else if (fastboot)
			name = 'fastboot';
		else if (firefox)
			name = 'firefox';
		else if (opera)
			name = 'opera';
		else if (safari)
			name = 'safari';

		this.setProperties({
			name,
			blink,
			chrome,
			edge,
			electron,
			explorer,
			fastboot,
			firefox,
			opera,
			safari,
		});

	},

	isBlink() {
		return enabled && !!window.CSS && ( this.isChrome() || this.isOpera() );
	},

	isChrome() {
		return enabled && !!window.chrome && !!window.chrome.webstore;
	},

	isEdge() {
		return enabled && !this.isExplorer() && !!window.StyleMedia;
	},

	isElectron() {
		return enabled && !!window.electron;
	},

	isExplorer() {
		return enabled && ( /*@cc_on!@*/false || !!document.documentMode );
	},

	isFastboot() {
		return !enabled;
	},

	isFirefox() {
		return enabled && ( typeof InstallTrigger !== 'undefined' );
	},

	isOpera() {
		return enabled && ( !!window.opera || !!window.opr || navigator.userAgent.indexOf('OPR/') >= 0 );
	},

	isSafari() {
		return enabled && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	},

});
