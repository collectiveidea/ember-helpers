import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('titleize', 'helper:titleize', {
	integration: true
});

test('It formats the input text with `titleize` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{titleize input}}`);
	assert.equal(this.$().text().trim(), 'This Is Some Text');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'This Was Some Text');
});
