import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-country', 'helper:pattern-country', {
	integration: true
});

test('It prevents entering anything but country values', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-country)}}`);
	this.$('input').val('GBP')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('123')
	assert.equal(this.$('input').is(':valid'), false);
});

