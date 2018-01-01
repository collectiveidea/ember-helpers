import { helper } from '@ember/component/helper';

export function preventDefault() {
	return function(event) {
		event.preventDefault();
		return event;
	};
}

export default helper(preventDefault);
