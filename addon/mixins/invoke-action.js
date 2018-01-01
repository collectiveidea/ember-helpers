import Mixin from '@ember/object/mixin';

export default Mixin.create({

	init() {

		this._super(...arguments);

		if ( this.get('invoke') ) {
			this.on(this.get('eventName'), this, this.invoker);
		}

	},

	willDestroyElement() {

		this._super(...arguments);

		if ( this.get('invoke') ) {
			this.off(this.get('eventName'), this, this.invoker);
		}

	},

	invoker() {

		this.sendAction('invoke');

	},

});
