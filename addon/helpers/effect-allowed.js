import { helper } from '@ember/component/helper';

export function effectAllowed(effect = 'move') {
	return function(event) {
		event.dataTransfer.effectAllowed = effect;
		return event;
	};
}

export default helper(effectAllowed);
