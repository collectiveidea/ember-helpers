import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('array', 'helper:array', {
	integration: true
});

test('It returns whether values are equal', function(assert) {
	assert.expect(2);
	this.set('input', 5);
	this.render(hbs`
		{{~#each (array 1 2 3 4 input) as |i|~}}
			{{i}}
		{{~/each~}}
	`);
	assert.equal(this.$().text().trim(), '12345');
	this.set('input', 0);
	assert.equal(this.$().text().trim(), '12340');
});
