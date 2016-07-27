import Ember from 'ember';

export function swapcase(params) {
	return (params[0] + '').replace(/([a-z]+)|([A-Z]+)/g, function($0, $1){
        return ($1) ? $0.toUpperCase() : $0.toLowerCase();
    });
}

export default Ember.Helper.helper(swapcase);