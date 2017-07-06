import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('or', 'helper:or', {
	integration: true
});

test('It checks if any values are truthy', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{or 1 2 3 true input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', false);
	assert.equal(this.$().text().trim(), 'true');
});
