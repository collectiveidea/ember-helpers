import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-opera', 'helper:browser-is-opera', {
	integration: true
});

test('It returns whether the browser is opera', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-opera)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

