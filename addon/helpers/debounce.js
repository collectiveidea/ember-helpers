import { helper } from '@ember/component/helper';
import { debounce as f } from '@ember/runloop';

export function debounce([callback, wait], { immediate=false }) {
	return function(value) {
		return f(null, callback, value, wait, immediate);
	};
}

export default helper(debounce);
