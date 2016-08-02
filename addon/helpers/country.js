import Ember from 'ember';
import country2 from 'ember-helpers/utils/country2';
import country3 from 'ember-helpers/utils/country3';

export function country(params) {
	return country2(params[0]) || country3(params[0]) || params[0];
}

export default Ember.Helper.helper(country);
