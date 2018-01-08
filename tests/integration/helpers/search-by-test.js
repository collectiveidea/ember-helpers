import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-by', 'helper:search-by', {
	integration: true
});

test('It ensures search-by works correctly', function(assert) {


	let oneA1 = 'abc def';
	let oneA2 = ['abc', 'def'];
	let twoA1 = 'jhi jkl';
	let twoA2 = ['jhi', 'jkl'];

	let oneB1 = 'mno pqr';
	let oneB2 = ['mno', 'pqr'];
	let twoB1 = 'stu vwx';
	let twoB2 = ['stu', 'vwx'];

	assert.expect(14);

	this.set('value', 'abc');
	this.set('input', undefined);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), '');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), '');

	this.set('value', 'abc');
	this.set('input', [{name: 'A', one: oneA1, two: twoA1}, {name: 'B', one: oneB1, two: twoB1}]);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), 'B');
	this.set('value', 'jkl');
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), 'A B');

	this.set('value', 'abc');
	this.set('input', [{name: 'A', one: oneA2, two: twoA2}, {name: 'B', one: oneB2, two: twoB2}]);
	this.render(hbs`{{#each (search-by 'one' 'two' value input) as |v|}}{{v.name}} {{/each}}`);
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'mno');
	assert.equal(this.$().text().trim(), 'B');
	this.set('value', 'jkl');
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'kl');
	assert.equal(this.$().text().trim(), 'A');
	this.set('value', 'jhi stu');
	assert.equal(this.$().text().trim(), 'A B');

});
