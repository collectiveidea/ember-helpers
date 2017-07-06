import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lowercase', 'helper:lowercase', {
	integration: true
});

test('It formats the input text with `lowercase` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{lowercase input}}`);
	assert.equal(this.$().text().trim(), 'this is some text');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'this was some text');
});
