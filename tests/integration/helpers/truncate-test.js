import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('truncate', 'helper:truncate', {
	integration: true
});

test('It formats the input text with `truncate` format', function(assert) {
	assert.expect(3);
	this.set('value', 4);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{truncate input value}}`);
	assert.equal(this.$().text().trim(), 'this...');
	this.set('value', 6);
	assert.equal(this.$().text().trim(), 'this I...');
	this.set('value', 17);
	assert.equal(this.$().text().trim(), 'this Is some TEXT');
});
