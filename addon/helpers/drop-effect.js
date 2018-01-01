import { helper } from '@ember/component/helper';

export function dropEffect(effect = 'move') {
	return function(event) {
		event.dataTransfer.dropEffect = effect;
		return event;
	};
}

export default helper(dropEffect);
