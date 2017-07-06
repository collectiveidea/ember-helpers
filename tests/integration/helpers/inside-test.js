import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inside', 'helper:inside', {
	integration: true
});

test('It checks if a string contains a value', function(assert) {
	assert.expect(2);
	this.set('input', "some");
	this.render(hbs`{{inside "this is some text" input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', "none");
	assert.equal(this.$().text().trim(), 'false');
});
