import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ucwords', 'helper:ucwords', {
	integration: true
});

test('It formats the input text with `ucwords` format', function(assert) {
	assert.expect(2);
	this.set('input', 'this Is some TEXT');
	this.render(hbs`{{ucwords input}}`);
	assert.equal(this.$().text().trim(), 'This Is Some TEXT');
	this.set('input', 'this Was some TEXT');
	assert.equal(this.$().text().trim(), 'This Was Some TEXT');
});
