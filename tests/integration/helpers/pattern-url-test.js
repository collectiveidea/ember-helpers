import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-url', 'helper:pattern-url', {
	integration: true
});

test('It prevents entering anything but urls', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-url)}}`);
	this.$('input').val('https://abcum.com/path?query#hash')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('https://some invalid address.com/path')
	assert.equal(this.$('input').is(':valid'), false);
});

