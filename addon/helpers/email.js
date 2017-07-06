import Ember from "ember";

export function email([value]) {
	return String('mailto:'+value).replace(/[\u00A0-\u9999<>\&]/gim, (i) => {
		return `&#${i.charCodeAt(0)};`;
	});
}

export default Ember.Helper.helper(email);
