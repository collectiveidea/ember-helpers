import { helper } from '@ember/component/helper';

export function dragSet([type, value]) {
	return function(event) {
		if (type === 'application/json') {
			value = JSON.stringify(value);
		}
		event.dataTransfer.setData(type, value);
		return event;
	};
}

export default helper(dragSet);
