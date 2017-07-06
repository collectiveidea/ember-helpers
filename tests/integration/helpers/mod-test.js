import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mod', 'helper:mod', {
	integration: true
});

test('It returns the modulus of the given values', function(assert) {
	assert.expect(4);
	this.set('input', 2);
	this.render(hbs`{{mod 100 input}}`);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 3);
	assert.equal(this.$().text().trim(), '1');
	this.set('input', 4);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 5);
	assert.equal(this.$().text().trim(), '0');
});

