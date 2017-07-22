import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-email', 'helper:pattern-email', {
	integration: true
});

test('It prevents entering anything but emails', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-email)}}`);
	this.$('input').val('info@abcum.com')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('invalid email@abcum.com')
	assert.equal(this.$('input').is(':valid'), false);
});

