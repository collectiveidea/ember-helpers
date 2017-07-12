import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('regexp', 'helper:regexp', {
	integration: true
});

test('It formats the input text with `regexp` regular expresison', function(assert) {
	assert.expect(2);
	this.set('input', 'Hello');
	this.render(hbs`{{replace "Hello everyone. Hello world." (regexp input "gi") "Goodbye"}}`);
	assert.equal(this.$().text().trim(), 'Goodbye everyone. Goodbye world.');
	this.set('input', 'H([a-z]*)o');
	assert.equal(this.$().text().trim(), 'Goodbye everyone. Goodbye world.');
});
