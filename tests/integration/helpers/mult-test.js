import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mult', 'helper:mult', {
	integration: true
});

test('It returns the multiplication of the given values', function(assert) {
	assert.expect(4);
	this.set('input', 2);
	this.render(hbs`{{mult 100 input}}`);
	assert.equal(this.$().text().trim(), '200');
	this.set('input', 3);
	assert.equal(this.$().text().trim(), '300');
	this.set('input', 4);
	assert.equal(this.$().text().trim(), '400');
	this.set('input', 5);
	assert.equal(this.$().text().trim(), '500');
});

