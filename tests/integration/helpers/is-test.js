import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is', 'helper:is', {
	integration: true
});

test('It checks if all values are true', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{is true input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'false');
});
