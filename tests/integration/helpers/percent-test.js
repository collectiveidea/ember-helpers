import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percent', 'helper:percent', {
	integration: true
});

test('It returns the percentage of the given values', function(assert) {
	assert.expect(3);
	this.set('value', 5);
	this.set('input', 15);
	this.render(hbs`{{percent value input}}`);
	assert.equal(this.$().text().trim(), '33');
	this.set('input', 25);
	assert.equal(this.$().text().trim(), '20');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '10');
});

