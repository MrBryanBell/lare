/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { getCycleProgressPercentage } from '../../actions/get-cycle-progress-percentage'


it('should return a value of type number', () => {
	const result = getCycleProgressPercentage(0);
	expect(result).toBeTypeOf('number');
});


it('should return 0 if current cycle is 0', () => {
	const expected = 0;

	const result = getCycleProgressPercentage(0);
	expect(result).toBe(expected);
});


it('should return 100 if current cycle is 10', () => {
	const expected = 100;

	const result = getCycleProgressPercentage(10);
	expect(result).toBe(expected);
});