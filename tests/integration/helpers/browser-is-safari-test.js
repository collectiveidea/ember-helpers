import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-safari', 'helper:browser-is-safari', {
	integration: true
});

test('It returns whether the browser is safari', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-safari)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

