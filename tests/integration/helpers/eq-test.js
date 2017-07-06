import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'helper:eq', {
	integration: true
});

test('It returns whether values are equal', function(assert) {
	assert.expect(2);
	this.set('input', 'test');
	this.render(hbs`{{eq 'test' input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', 'none');
	assert.equal(this.$().text().trim(), 'false');
});
