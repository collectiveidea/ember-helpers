import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nl2br', 'helper:nl2br', {
	integration: true
});

test('It formats the input text with `nl2br` format', function(assert) {
	assert.expect(7);
	this.set('input', 'This is some text');
	this.render(hbs`{{nl2br input}}`);
	assert.equal(this.$().html(), 'This is some text');
	this.set('input', 'This is some text\rwith a line break');
	assert.equal(this.$().html(), 'This is some text<br>with a line break');
	this.set('input', 'This is some text\nwith a line break');
	assert.equal(this.$().html(), 'This is some text<br>with a line break');
	this.set('input', 'This is some text\r\nwith a line break');
	assert.equal(this.$().html(), 'This is some text<br>with a line break');
	this.set('input', 'This is some text\r\r\rwith many line breaks');
	assert.equal(this.$().html(), 'This is some text<br><br><br>with a line break');
	this.set('input', 'This is some text\n\n\nwith many line breaks');
	assert.equal(this.$().html(), 'This is some text<br><br><br>with a line break');
	this.set('input', 'This is some text\r\n\r\n\r\nwith many line breaks');
	assert.equal(this.$().html(), 'This is some text<br><br><br>with a line break');
});
