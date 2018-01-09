import Await from './await';

export default Await.extend({

	value: false,

	process(promise) {

		promise.then(() => {
			this.set('value', true);
		}).catch(() => {
			this.set('value', false);
		});

		return this.get('value');

	},

});
