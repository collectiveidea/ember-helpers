import Ember from 'ember';

export function range([min, max]) {

	let numbers = [];

	if (min < max) {
		for (let i = min; i <= max; i++) {
			numbers.push(i);
		}
	}

	if (max < min) {
		for (let i = max; i >= min; i++) {
			numbers.push(i);
		}
	}

	return numbers;

}

export default Ember.Helper.helper(range);
