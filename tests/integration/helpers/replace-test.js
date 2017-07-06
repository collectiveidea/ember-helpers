import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('replace', 'helper:replace', {
	integration: true
});

test('It formats the input text with `replace` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{replace input "Is" "Was"}}`);
	assert.equal(this.$().text().trim(), 'this Was some TEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'this Was some TEXT');
});
