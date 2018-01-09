import { helper } from '@ember/component/helper';
import country2 from '../utils/country2';
import country3 from '../utils/country3';

export function country(params) {
	return country2(params[0]) || country3(params[0]) || params[0];
}

export default helper(country);
