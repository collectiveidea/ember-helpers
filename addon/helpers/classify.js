import Ember from 'ember';

export function classify([value='']) {
	Ember.String.classify(value+'');
}

export default Ember.Helper.helper(classify);
