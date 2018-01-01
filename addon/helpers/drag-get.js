import { helper } from '@ember/component/helper';

export function dragGet([type]) {
	return function(event) {
      let value = event.dataTransfer.getData(type);
		if (type === 'application/json') {
			return JSON.parse(value);
		}
		return value;
	};
}

export default helper(dragGet);
