import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-alphanum', 'helper:pattern-alphanum', {
	integration: true
});

test('It prevents entering anything but alphanum characters', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-alphanum)}}`);
	this.$('input').val('asd123')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('asd123 !@£$%^')
	assert.equal(this.$('input').is(':valid'), false);
});

