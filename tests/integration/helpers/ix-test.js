import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ix', 'helper:ix', {
	integration: true
});

test('It checks if all values are false', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{ix false input}}`);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'true');
});
