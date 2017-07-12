import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('present', 'helper:present', {
	integration: true
});

test('It checks if all values are present', function(assert) {
	assert.expect(2);
	this.set('input', true);
	this.render(hbs`{{present true input}}`);
	assert.equal(this.$().text().trim(), 'true');
	this.set('input', "\n\t");
	assert.equal(this.$().text().trim(), 'false');
});
