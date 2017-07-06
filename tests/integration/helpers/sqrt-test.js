import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sqrt', 'helper:sqrt', {
	integration: true
});

test('It returns the square root of the given value', function(assert) {
	assert.expect(3);
	this.set('input', 9);
	this.render(hbs`{{sqrt input}}`);
	assert.equal(this.$().text().trim(), '3');
	this.set('input', 25);
	assert.equal(this.$().text().trim(), '5');
	this.set('input', 100);
	assert.equal(this.$().text().trim(), '10');
});

