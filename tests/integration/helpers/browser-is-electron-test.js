import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-electron', 'helper:browser-is-electron', {
	integration: true
});

test('It returns whether the browser is electron', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-electron)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

