import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('floor', 'helper:floor', {
	integration: true
});

test('It rounds down to the full value', function(assert) {
	assert.expect(4);
	this.set('input', 0);
	this.render(hbs`{{floor input}}`);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 0.1);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 0.5);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 1);
	assert.equal(this.$().text().trim(), '1');
});

