import Ember from "ember";

// SEE https://github.com/emberjs/ember.js/blob/v2.7.0/packages/ember-runtime/lib/computed/reduce_computed_macros.js#L672

export default Ember.computed.search = function(itemsKey, searchString, searchDefinition) {

	Ember.assert('Ember.computed.search requires threee arguments: an array key to search, a search string, and a search properties key', arguments.length === 3);

	let cp = new Ember.ComputedProperty(function(key) {

		function didChange() {
			this.notifyPropertyChange(key);
		}

		let items = this.get(itemsKey);
		let value = this.get(searchString);
		let props = this.get(searchDefinition);

		if (cp._activeObserverMap) {
			cp._activeObserverMap.forEach(args => Ember.removeObserver.apply(null, args));
		}

		cp._activeObserverMap = [];

		if (!items || !value) { return items; }

		if (!Ember.isArray(props)) { return items; }

		props.forEach(prop => {
			var args = [this, `${itemsKey}.@each.${prop[0]}`, didChange];
			cp._activeObserverMap.push(args);
			Ember.addObserver.apply(null, args);
		});

		let found = String(value).toLowerCase().split(' ');

		return items.filter(item => {
			return props.any(prop => {
				let value = String( item.get(prop) ).toLowerCase();
				return found.any(i => value.contains(i) );
			});
		});

	});

	return cp.property(`${itemsKey}.[]`, `${searchString}`, `${searchDefinition}.[]`).readOnly();

};
