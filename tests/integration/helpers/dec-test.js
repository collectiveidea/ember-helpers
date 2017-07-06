import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dec', 'helper:dec', {
	integration: true
});

test('It increments a value by 1', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{dec input}}`);
	assert.equal(this.$().text().trim(), '9');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '49');
});

test('It increments a value by an amount', function(assert) {
	assert.expect(2);
	this.set('input', 10);
	this.render(hbs`{{dec 10 input}}`);
	assert.equal(this.$().text().trim(), '0');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '-40');
});

