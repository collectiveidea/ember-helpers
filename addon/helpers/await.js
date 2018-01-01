import { observer } from '@ember/object';
import Helper from '@ember/component/helper';
import { Promise } from 'rsvp';

export default Helper.extend({

	value: null,

	promise: null,

	changed: observer('value', function() {
		this.recompute();
	}),

	compute([promise]) {

		if (promise === this.promise) {
			return this.get('value');
		}

		this.promise = promise;

		return this.process( Promise.resolve(promise) );

	},

	process(promise) {

		let value = promise.then( (value) => {
			this.set('value', value);
		}).catch(() => {
			this.set('value', null);
		});

		return this.set('value', value);

	},

});
