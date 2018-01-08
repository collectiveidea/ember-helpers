import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('map-by', 'helper:map-by', {
	integration: true
});

test('It ensures map-by works correctly', function(assert) {

	assert.expect(4);

	this.set('input', undefined);
	this.render(hbs`{{#each (map-by input) as |v|}}{{v}} {{/each}}`);
	assert.equal(this.$().text().trim(), '');

	this.set('input', ['one', 'two']);
	this.render(hbs`{{#each (map-by '' input) as |v|}}{{v}} {{/each}}`);
	assert.equal(this.$().text().trim(), 'one two');

	this.set('input', [{name:'one'}, {name:'two'}]);
	this.render(hbs`{{#each (map-by 'name' input) as |v|}}{{v}} {{/each}}`);
	assert.equal(this.$().text().trim(), 'one two');

	this.set('func', v => v.name);
	this.set('input', [{name:'one'}, {name:'two'}]);
	this.render(hbs`{{#each (map-by func input) as |v|}}{{v}} {{/each}}`);
	assert.equal(this.$().text().trim(), 'one two');

});
