/* eslint-disable */
import { padNumber } from '../../actions/pad-number';

it('should return "04 uv" if value value is 4', () => {
	const expected = '04 uv';
	const uv = 4; //?

	const result = padNumber(uv); //?

	expect(result).toBe(expected);
});

it('should return "03 uv" if uv value is 3', () => {
	const expected = '03 uv';
	const uv = 3;

	const result = padNumber(uv);

	expect(result).toBe(expected);
});

it('should return "12 uv" if uv value is 12', () => {
	const expected = '12 uv';
	const uv = 12; 

	const result = padNumber(uv);

	expect(result).toBe(expected);
});
