import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('isnt', 'helper:isnt', {
	integration: true
});

test('It checks if all values are false', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{isnt false input}}`);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'true');
});
