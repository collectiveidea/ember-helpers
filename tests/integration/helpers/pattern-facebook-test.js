import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-facebook', 'helper:pattern-facebook', {
	integration: true
});

test('It prevents entering anything but facebook usernames', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-facebook)}}`);
	this.$('input').val('tobie.mh')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('invalid username')
	assert.equal(this.$('input').is(':valid'), false);
});

