import { helper } from '@ember/component/helper';
import { throttle as f } from '@ember/runloop';

export function throttle([callback, wait], { immediate=false }) {
	return function(value) {
		return f(null, callback, value, wait, immediate);
	};
}

export default helper(throttle);
