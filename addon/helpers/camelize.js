import Ember from 'ember';

export function camelize([value='']) {
	Ember.String.camelize(value+'');
}

export default Ember.Helper.helper(camelize);
