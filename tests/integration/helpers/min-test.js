import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('min', 'helper:min', {
	integration: true
});

test('It returns the minimum value', function(assert) {
	assert.expect(2);
	this.set('input', 1000);
	this.render(hbs`{{min 100 250 500 input}}`);
	assert.equal(this.$().text().trim(), '100');
	this.set('input', 50);
	assert.equal(this.$().text().trim(), '50');
});
