import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('and', 'helper:and', {
	integration: true
});

test('It checks if all values are truthy', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{and 1 2 3 true input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'false');
});
