import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percent', 'helper:percent', {
	integration: true
});

test('It formats the percentage correctly', function(assert) {

	assert.expect(6);

	this.render(hbs`{{percent 0.33}}`);
	assert.equal(this.$().text().trim(), '33%');
	this.render(hbs`{{percent 0.33 minimumFractionDigits=2}}`);
	assert.equal(this.$().text().trim(), '33.00%');
	this.render(hbs`{{percent 0.3301689 maximumFractionDigits=2}}`);
	assert.equal(this.$().text().trim(), '33.02%');

	this.render(hbs`{{percent 363}}`);
	assert.equal(this.$().text().trim(), '36,300%');
	this.render(hbs`{{percent 363 useGrouping=true}}`);
	assert.equal(this.$().text().trim(), '36,300%');
	this.render(hbs`{{percent 363 useGrouping=false}}`);
	assert.equal(this.$().text().trim(), '36300%');

});

