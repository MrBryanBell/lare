/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { getTestId } from "../../actions/get-test-id";

it('should return "goNext-button" when actionType is "goNext"', () => {
	const expected = "goNext-button";
	const result = getTestId("goNext");

	expect(result).toBe(expected);
})

it('should return "goPrevious-button" when actionType is "goPrevious"', () => {
	const expected = "goPrevious-button";
	const result = getTestId("goPrevious");

	expect(result).toBe(expected);
})

