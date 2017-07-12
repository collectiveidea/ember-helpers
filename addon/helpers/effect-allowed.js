import Ember from 'ember';

export function effectAllowed(effect = 'move') {
	return function(event) {
		event.dataTransfer.effectAllowed = effect;
		return event;
	};
}

export default Ember.Helper.helper(effectAllowed);
