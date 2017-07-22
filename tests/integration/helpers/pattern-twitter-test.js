import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pattern-twitter', 'helper:pattern-twitter', {
	integration: true
});

test('It prevents entering anything but twitter handles', function(assert) {
	assert.expect(2);
	this.render(hbs`{{input pattern=(pattern-twitter)}}`);
	this.$('input').val('tobiemh')
	assert.equal(this.$('input').is(':valid'), true);
	this.$('input').val('invalid username')
	assert.equal(this.$('input').is(':valid'), false);
});

