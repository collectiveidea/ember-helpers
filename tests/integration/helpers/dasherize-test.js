import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dasherize', 'helper:dasherize', {
	integration: true
});

test('It formats the input text with `dasherize` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{dasherize input}}`);
	assert.equal(this.$().text().trim(), 'this-is-some-text');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'this-was-some-text');
});
