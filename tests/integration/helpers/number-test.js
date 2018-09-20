import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number', 'helper:number', {
	integration: true
});

test('It formats the number correctly', function(assert) {

	assert.expect(6);

	this.render(hbs`{{number 33}}`);
	assert.equal(this.$().text().trim(), '33');
	this.render(hbs`{{number 33 minimumFractionDigits=2}}`);
	assert.equal(this.$().text().trim(), '33.00');
	this.render(hbs`{{number 33.01689 maximumFractionDigits=2}}`);
	assert.equal(this.$().text().trim(), '33.02');

	this.render(hbs`{{number 369000}}`);
	assert.equal(this.$().text().trim(), '369,000');
	this.render(hbs`{{number 369000 useGrouping=true}}`);
	assert.equal(this.$().text().trim(), '369,000');
	this.render(hbs`{{number 369000 useGrouping=false}}`);
	assert.equal(this.$().text().trim(), '369000');

});

