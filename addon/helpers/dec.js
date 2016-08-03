import Ember from 'ember';

export function dec([value, amount]) {
	return parseFloat(value) - ( parseFloat(amount) || 1 );
}

export default Ember.Helper.helper(dec);
