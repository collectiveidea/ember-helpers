import Ember from 'ember';

export function split([separator, ...params]) {
	return params.map(String).map( string => string.split(separator) ).reduce( (words, other) => words.concat(other) );
}

export default Ember.Helper.helper(split);
