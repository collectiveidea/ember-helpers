import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-chrome', 'helper:browser-is-chrome', {
	integration: true
});

test('It returns whether the browser is chrome', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-chrome)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'YES');
});

