import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lt', 'helper:lt', {
	integration: true
});

test('It returns whether values are less than', function(assert) {
	assert.expect(3);
	this.set('input', 100);
	this.render(hbs`{{lt 10 input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', 10);
	assert.equal(this.$().text().trim(), 'false');
	this.set('input', 5);
	assert.equal(this.$().text().trim(), 'false');
});
