/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { Cycle } from '../../models/classes/cycle-counter';


let cycle: Cycle;
let currentCycle: number;


beforeEach(() => {
	cycle = new Cycle();
	cycle.subscribe($cycle => currentCycle = $cycle.number);
})


it('cycle.number should have an initial state of 1', () => {
	const expected = 1;

	expect(currentCycle).toBe(expected);
});


it('should increase cycle.number value by 1 after .goNext() method', () => {
	const expected = 2;
	cycle.goNext(); 

	expect(currentCycle).toBe(expected);
});


it('should decrease cycle.number value by 1 after .goBack() method', () => {
	const expected = 4;

	cycle.goTo(5);
	cycle.goPrevious();

	expect(currentCycle).toBe(expected);
});


it('should NOT decrease cycle.number if cycle.number value is 1', () => {
	const expected = 1;

	cycle.goPrevious();

	expect(currentCycle).toBe(expected);
});


it('should NOT increase cycle.number if cycle.number value is 10', () => {
	const expected = 10;

	cycle.goTo(10);
	cycle.goNext();

	expect(currentCycle).toBe(expected);
});


it('should return the current cycle in string after invoking .toString()', () => {
	const expected = 'primero';
	const result = cycle.inString;

	expect(result).toBe(expected);
});


it('should return a percentage of 30 if currentCycle is 3', () => {
	const expected = 30;
	cycle.goTo(3);

	const result = cycle.progressPercentage;

	expect(result).toBe(expected);
});


// it('should...', () => {});