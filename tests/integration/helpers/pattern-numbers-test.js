import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-numbers', 'helper:pattern-numbers', {
	integration: true
});

test('It prevents entering anything but numbers', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-numbers)}}`);
	this.$('input').val('123')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('asd')
	assert.equal(this.$('input').is(':valid'), false);
});

