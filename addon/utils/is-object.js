import Ember from 'ember';

export default function isObject(val) {
	return Ember.typeOf(val) === 'object' || Ember.typeOf(val) === 'instance';
}
