import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-firefox', 'helper:browser-is-firefox', {
	integration: true
});

test('It returns whether the browser is firefox', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-firefox)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

