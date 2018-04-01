import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-by', 'helper:search-by', {
	integration: true
});

test('It ensures search-by works correctly', function(assert) {

	let testOne = [
		{ name: 'A', one: 'abc def', two: 'jhi jkl' },
		{ name: 'B', one: 'mno pqr', two: 'stu vwx' },
		{ name: 'C', one: 'abc def mno pqr', two: 'jhi jkl stu vwx' },
	];

	let testTwo = [
		{ name: 'A', one: ['abc', 'def'], two: ['jhi', 'jkl'] },
		{ name: 'B', one: ['mno', 'pqr'], two: ['stu', 'vwx'] },
		{ name: 'C', one: ['abc', 'def', 'mno', 'pqr'], two: ['jhi', 'jkl', 'stu', 'vwx'] },
	];

	assert.expect(16);

	this.set('input', undefined);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	this.set('value', 'abc');
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), '');

	this.set('input', testOne);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	this.set('value', 'abc');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), 'B C');
	this.set('value', 'jkl');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), 'C');
	this.set('value', 'abc mno jhi stu');
	assert.equal(this.$().text().trim(), 'C');

	this.set('input', testTwo);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	this.set('value', 'abc');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), 'B C');
	this.set('value', 'jkl');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), 'A C');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), 'C');
	this.set('value', 'abc mno jhi stu');
	assert.equal(this.$().text().trim(), 'C');

});
