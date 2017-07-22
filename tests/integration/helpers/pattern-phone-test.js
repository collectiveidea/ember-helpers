import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-phone', 'helper:pattern-phone', {
	integration: true
});

test('It prevents entering anything but phone numbers', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-phone)}}`);
	this.$('input').val('+44 1234 567 890')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('+44 1234 abc def')
	assert.equal(this.$('input').is(':valid'), false);
});

