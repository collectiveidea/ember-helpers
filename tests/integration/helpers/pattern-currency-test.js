import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-currency', 'helper:pattern-currency', {
	integration: true
});

test('It prevents entering anything but currency values', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-currency)}}`);
	this.$('input').val('GBP')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('123')
	assert.equal(this.$('input').is(':valid'), false);
});

