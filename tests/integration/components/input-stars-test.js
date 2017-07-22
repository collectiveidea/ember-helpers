import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-stars', 'component:input-stars', {
	integration: true
});

test('It inserts a star input element bound to a value', function(assert) {
	assert.expect(4);
	this.set('input', 1);
	this.render(hbs`{{input-stars value=input}}`);
	assert.equal(this.$('div[selected=true]').length, 1);
	this.$('div:nth-child(4)').click();
	assert.equal(this.$('div[selected=true]').length, 4);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected=true]').length, 1);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected=true]').length, 0);
});

test('It inserts a disabled star input element bound to a value', function(assert) {
	assert.expect(4);
	this.set('input', 1);
	this.render(hbs`{{input-stars value=input disabled=true}}`);
	assert.equal(this.$('div[selected=true]').length, 1);
	this.$('div:nth-child(4)').click();
	assert.equal(this.$('div[selected=true]').length, 1);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected=true]').length, 1);
	this.$('div:nth-child(1)').click();
	assert.equal(this.$('div[selected=true]').length, 1);
});

