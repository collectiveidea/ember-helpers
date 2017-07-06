import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('email', 'helper:email', {
	integration: true
});

test('It creates an obfuscated email link', function(assert) {
	assert.expect(2);
	this.set('input', 'info@abcum.com');
	this.render(hbs`{{email input}}`);
	assert.equal(this.$().text().trim(), 'mailto:info@abcum.com');
	this.set('input', 'help@abcum.com');
	assert.equal(this.$().text().trim(), 'mailto:help@abcum.com');
});
