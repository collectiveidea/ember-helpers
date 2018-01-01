import { typeOf } from '@ember/utils';

export default function isPromise(val) {
	return typeOf(val) === 'object' && typeOf(val.then) === 'function' && typeOf(val.catch) === 'function';
}
