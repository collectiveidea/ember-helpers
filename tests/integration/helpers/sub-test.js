import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sub', 'helper:sub', {
	integration: true
});

test('It subtracts values', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{sub 10 5 5 input}}`);
	assert.equal(this.$().text().trim(), '-10');
	this.set('input', 30);
	assert.equal(this.$().text().trim(), '-30');
});

