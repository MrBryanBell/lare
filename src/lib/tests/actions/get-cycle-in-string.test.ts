/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { getCycleInString } from '../../actions/get-cycle-in-string';


it('should return an string', () => {
	const result = getCycleInString(1);

	expect(result).toBeTypeOf('string');
});


it('should return string "primero" if cycleNumber is 1', () => {
	const expected = 'primero';
	const cycleNumber = 1;

	const result = getCycleInString(cycleNumber);

	expect(result).toBe(expected);
	expect(result).toBeTypeOf('string');
});


it('should return string "quinto" if cycleNumber is 5', () => {
	const expected = 'quinto';
	const cycleNumber = 5;

	const result = getCycleInString(cycleNumber);

	expect(result).toBe(expected);
});


it('should return error "invalid number" if number is lower than 1', () => {
	function excute () {
		getCycleInString(0);
	}
	expect(excute).toThrow(/invalid number/);
});


it('should return error "invalid number" if number is greater than 10', () => {
	function excute () {
		getCycleInString(11);
	}
	expect(excute).toThrow(/invalid number/);
});


// Retornar 'invalid type' si el input no es un numero