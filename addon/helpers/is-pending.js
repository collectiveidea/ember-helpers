import Await from './await';

export default Await.extend({

	value: true,

	process(promise) {

		promise.catch(() => {}).finally(() => {
			this.set('value', false);
		});

		return this.get('value');

	},

});
