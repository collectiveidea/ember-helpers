import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('xor', 'helper:xor', {
	integration: true
});

test('It checks if a single value is truthy', function(assert) {
	assert.expect(3);
	this.set('check', true);
	this.set('input', true);
	this.render(hbs`{{xor check input}}`);
	assert.equal(this.$().text().trim(), 'false');
	this.set('check', false);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'false');
});
