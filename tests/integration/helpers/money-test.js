import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('money', 'helper:money', {
	integration: true
});

test('It formats the money correctly', function(assert) {

	assert.expect(7);

	this.render(hbs`{{money 33}}`);
	assert.equal(this.$().text().trim(), '$33.00');
	this.render(hbs`{{money 33 currency='GBP'}}`);
	assert.equal(this.$().text().trim(), '£33.00');
	this.render(hbs`{{money 33 minimumFractionDigits=0}}`);
	assert.equal(this.$().text().trim(), '$33');
	this.render(hbs`{{money 33.01689 maximumFractionDigits=2}}`);
	assert.equal(this.$().text().trim(), '$33.02');

	this.render(hbs`{{money 369000}}`);
	assert.equal(this.$().text().trim(), '$369,000.00');
	this.render(hbs`{{money 369000 useGrouping=true}}`);
	assert.equal(this.$().text().trim(), '$369,000.00');
	this.render(hbs`{{money 369000 useGrouping=false}}`);
	assert.equal(this.$().text().trim(), '$369000.00');

});

