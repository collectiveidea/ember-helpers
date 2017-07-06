import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ends-with', 'helper:ends-with', {
	integration: true
});

test('It checks if a string ends with a value', function(assert) {
	assert.expect(2);
	this.set('check', "hello");
	this.set('input', "o");
	this.render(hbs`{{ends-with check input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', "z");
	assert.equal(this.$().text().trim(), 'false');
});
