import Ember from 'ember';
import md5 from "md5";

export default Ember.Helper.extend({

	compute([...params]) {
		return (...parts) => {
			alert( params.join(' ') + parts.join(' ') );
		};
	}

});