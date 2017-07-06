import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ne', 'helper:ne', {
	integration: true
});

test('It returns whether values are not equal', function(assert) {
	assert.expect(2);
	this.set('input', 'test');
	this.render(hbs`{{ne 'test' input}}`);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', 'none');
	assert.equal(this.$().text().trim(), 'true');
});
