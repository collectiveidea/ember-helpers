import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...main], hash, ...options) {
		return function(...rest) {
			Object.keys(hash).forEach(function(key) {
				options.push(`${key}=${hash[key]}`);
			});
			window.open(main.join('') + rest.join(''), null, options.join(','));
			return main.join('') + rest.join('');
		};
	}

});
