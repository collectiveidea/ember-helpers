import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gt', 'helper:gt', {
	integration: true
});

test('It returns whether values are greater than', function(assert) {
	assert.expect(3);
	this.set('input', 100);
	this.render(hbs`{{gt 10 input}}`);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', 10);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', 5);
	assert.equal(this.$().text().trim(), 'true');
});
