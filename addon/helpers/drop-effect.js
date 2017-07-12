import Ember from 'ember';

export function dropEffect(effect = 'move') {
	return function(event) {
		event.dataTransfer.dropEffect = effect;
		return event;
	};
}

export default Ember.Helper.helper(dropEffect);
