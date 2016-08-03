import Ember from 'ember';

export function underscore([value='']) {
	Ember.String.underscore(value+'');
}

export default Ember.Helper.helper(underscore);
