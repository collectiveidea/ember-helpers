import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add', 'helper:add', {
	integration: true
});

test('It adds values', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{add 10 5 5 input}}`);
	assert.equal(this.$().text().trim(), '30');
	this.set('input', 30);
	assert.equal(this.$().text().trim(), '50');
});

