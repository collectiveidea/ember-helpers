import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-integer', 'helper:pattern-integer', {
	integration: true
});

test('It prevents entering anything but integers', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-integer)}}`);
	this.$('input').val('+123')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('+123 asd')
	assert.equal(this.$('input').is(':valid'), false);
});

