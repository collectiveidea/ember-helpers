import Ember from 'ember';

export function lowercase(params) {
    return (params[0] + '').toLowerCase();
}

export default Ember.Helper.helper(lowercase);