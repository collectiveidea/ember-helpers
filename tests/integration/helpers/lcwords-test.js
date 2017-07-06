import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lcwords', 'helper:lcwords', {
	integration: true
});

test('It formats the input text with `lcwords` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{lcwords input}}`);
	assert.equal(this.$().text().trim(), 'this is some tEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'this was some tEXT');
});
