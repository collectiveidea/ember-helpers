import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-explorer', 'helper:browser-is-explorer', {
	integration: true
});

test('It returns whether the browser is explorer', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-explorer)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

