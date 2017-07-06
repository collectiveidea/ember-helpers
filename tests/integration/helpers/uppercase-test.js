import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uppercase', 'helper:uppercase', {
	integration: true
});

test('It formats the input text with `uppercase` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{uppercase input}}`);
	assert.equal(this.$().text().trim(), 'THIS IS SOME TEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'THIS WAS SOME TEXT');
});
