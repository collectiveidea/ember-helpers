import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browser-is-fastboot', 'helper:browser-is-fastboot', {
	integration: true
});

test('It returns whether the browser is fastboot', function(assert) {
	assert.expect(1);
	this.render(hbs`{{#if (browser-is-fastboot)}}YES{{else}}NO{{/if}}`);
	assert.equal(this.$().text().trim(), 'NO');
});

