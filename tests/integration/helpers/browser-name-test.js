import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-name', 'helper:browser-name', {
	integration: true
});

test('It returns the browser name', function(assert) {
	assert.expect(1);
	this.render(hbs`{{browser-name}}`);
	if (window.chrome && window.chrome.webstore) {
		assert.equal(this.$().text().trim(), 'chrome');
	} else {
		assert.equal(this.$().text().trim(), 'unknown');
	}
});

