import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('not', 'helper:not', {
	integration: true
});

test('It checks if all values are truthy', function(assert) {
	assert.expect(2);
	this.set('input', false);
	this.render(hbs`{{not 0 null false input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', true);
	assert.equal(this.$().text().trim(), 'false');
});
