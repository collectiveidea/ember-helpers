import { helper } from '@ember/component/helper';

export function stopPropagation() {
	return function(event) {
		event.stopPropagation();
		return event;
	};
}

export default helper(stopPropagation);
