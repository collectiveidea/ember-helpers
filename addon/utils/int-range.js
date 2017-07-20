export default function intRange(b, e) {
	return Array.apply(null, Array(e-b+1)).map( (_, n) => n + b);
}
