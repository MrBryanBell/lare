/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent, cleanup } from '@testing-library/svelte';
import CycleProgressBar from '../../components/cyclebar/CycleProgressBar.svelte';

let cycleProgressBar: RenderResult;
let progressBar: HTMLElement;

beforeEach(() => {
	cycleProgressBar = render(CycleProgressBar);
	const { getByTestId } = cycleProgressBar;

	progressBar = getByTestId('progress-bar');
});


it('should have an initial state of 0', () => {
	const expected = "0%";
	expect(progressBar).toBeTruthy;

	const width = progressBar.dataset.width;

	expect(width).toBe(expected);
});

// it('...', () => {});
