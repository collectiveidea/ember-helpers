import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slug', 'helper:slug', {
	integration: true
});

test('It formats the input text with `slug` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some "TEXT"');
	this.render(hbs`{{slug input}}`);
	assert.equal(this.$().text().trim(), 'this-is-some-text');
	this.set('input', 'this Was some "TEXT"');
	assert.equal(this.$().text().trim(), 'this-was-some-text');
});
