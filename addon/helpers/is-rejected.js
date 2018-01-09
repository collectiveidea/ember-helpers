import Await from './await';

export default Await.extend({

	value: false,

	process(promise) {

		promise.then(() => {
			this.set('value', false);
		}).catch(() => {
			this.set('value', true);
		});

		return this.get('value');

	},

});
