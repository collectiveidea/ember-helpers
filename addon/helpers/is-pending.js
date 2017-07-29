import Await from 'ember-helpers/helpers/await';

export default Await.extend({

	value: true,

	process(promise) {

		promise.catch(() => {}).finally(() => {
			this.set('value', false);
		});

		return this.get('value');

	},

});
