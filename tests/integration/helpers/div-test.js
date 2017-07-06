import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('div', 'helper:div', {
	integration: true
});

test('It returns the dividing of the given values', function(assert) {
	assert.expect(4);
	this.set('input', 2);
	this.render(hbs`{{div 100 input}}`);
	assert.equal(this.$().text().trim(), '50');
	this.set('input', 3);
	assert.equal(this.$().text().trim(), '33.333333333333336');
	this.set('input', 4);
	assert.equal(this.$().text().trim(), '25');
	this.set('input', 5);
	assert.equal(this.$().text().trim(), '20');
});

