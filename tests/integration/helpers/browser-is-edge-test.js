import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-edge', 'helper:browser-is-edge', {
	integration: true
});

test('It returns whether the browser is edge', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-edge)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

