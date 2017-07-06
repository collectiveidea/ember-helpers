import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('begs-with', 'helper:begs-with', {
	integration: true
});

test('It checks if a string begins with a value', function(assert) {
	assert.expect(2);
	this.set('check', "hello");
	this.set('input', "h");
	this.render(hbs`{{begs-with check input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', "a");
	assert.equal(this.$().text().trim(), 'false');
});
