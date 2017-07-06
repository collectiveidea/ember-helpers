import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inc', 'helper:inc', {
	integration: true
});

test('It increments a value by 1', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{inc input}}`);
	assert.equal(this.$().text().trim(), '11');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '51');
});

test('It increments a value by an amount', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{inc 10 input}}`);
	assert.equal(this.$().text().trim(), '20');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '60');
});

