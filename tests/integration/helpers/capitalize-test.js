import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('capitalize', 'helper:capitalize', {
	integration: true
});

test('It formats the input text with `capitalize` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{capitalize input}}`);
	assert.equal(this.$().text().trim(), 'This Is some TEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'This Was some TEXT');
});
