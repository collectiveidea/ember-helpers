import Ember from 'ember';

export function uppercase(params) {
    return (params[0] + '').toUpperCase();
}

export default Ember.Helper.helper(uppercase);