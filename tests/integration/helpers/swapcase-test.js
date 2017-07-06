import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('swapcase', 'helper:swapcase', {
	integration: true
});

test('It formats the input text with `swapcase` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{swapcase input}}`);
	assert.equal(this.$().text().trim(), 'THIS iS SOME text');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'THIS wAS SOME text');
});
