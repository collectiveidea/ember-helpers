import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('camelize', 'helper:camelize', {
	integration: true
});

test('It formats the input text with `camelize` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{camelize input}}`);
	assert.equal(this.$().text().trim(), 'thisIsSomeTEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'thisWasSomeTEXT');
});
