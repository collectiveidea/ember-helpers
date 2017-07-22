import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-decimal', 'helper:pattern-decimal', {
	integration: true
});

test('It prevents entering anything but decimals', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-decimal)}}`);
	this.$('input').val('+123.13')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('+123.13 asd')
	assert.equal(this.$('input').is(':valid'), false);
});

