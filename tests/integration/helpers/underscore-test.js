import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('underscore', 'helper:underscore', {
	integration: true
});

test('It formats the input text with `underscore` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{underscore input}}`);
	assert.equal(this.$().text().trim(), 'this_is_some_text');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'this_was_some_text');
});
