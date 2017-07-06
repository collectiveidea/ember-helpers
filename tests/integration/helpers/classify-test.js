import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('classify', 'helper:classify', {
	integration: true
});

test('It formats the input text with `classify` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{classify input}}`);
	assert.equal(this.$().text().trim(), 'ThisIsSomeTEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'ThisWasSomeTEXT');
});
