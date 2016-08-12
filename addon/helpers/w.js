import Ember from 'ember';

export function w([...params]) {
	return params.map(String).map(Ember.String.w).reduce( (words, other) => words.concat(other) );
}

export default Ember.Helper.helper(w);
