import Ember from 'ember';

export default function isPromise(val) {
	return Ember.typeOf(val) === 'object' && Ember.typeOf(val.then) === 'function' && Ember.typeOf(val.catch) === 'function';
}
