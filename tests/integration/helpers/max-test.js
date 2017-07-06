import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('max', 'helper:max', {
	integration: true
});

test('It returns the maximum value', function(assert) {
	assert.expect(2);
	this.set('input', 1000);
	this.render(hbs`{{max 100 250 500 input}}`);
	assert.equal(this.$().text().trim(), '1000');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '500');
});
