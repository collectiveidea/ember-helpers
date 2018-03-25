import Ember from 'ember';
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function linkify([value='']) {

	let regx = /(?:^|\s)(["'])?(?:(?:(?:(?:https?|ftp|\w):)?\/\/)|(?:www.))(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:1\d\d|2[0-4]\d|25[0-4]|[1-9]\d?))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?\1(?:$|\s)/ig;

	let text = Ember.Handlebars.Utils.escapeExpression( String(value) ).replace(regx, function(s) {

		if (s.indexOf('://') !== -1) {
			return ` <a href="${s.trim()}" target="_blank">${s.trim()}</a> `;
		}

		if (s.indexOf('://') === -1) {
			return ` <a href="//${s.trim()}" target="_blank">${s.trim()}</a> `;
		}

	});

	return htmlSafe(text);

}

export default helper(linkify);
