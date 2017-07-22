import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-stars', 'component:input-stars', {
	integration: true
});

test('It inserts a star input element', function(assert) {
	assert.expect(4);
	this.set('input', 1);
	this.render(hbs`{{input-stars value=input}}`);
	assert.equal(this.$('div[selected]').length, 1);
	this.$('div:nth-child(4)').click();
	assert.equal(this.$('div[selected]').length, 4);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected]').length, 1);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected]').length, 0);
});

