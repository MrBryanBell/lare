/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent, cleanup } from '@testing-library/svelte';
import CycleHeader from '../../components/CycleHeader.svelte';

let cycleHeader: RenderResult;
let cycleHeaderTitle: HTMLElement;
let goNextButton: HTMLElement;
let goPreviousButton: HTMLElement;

beforeEach(() => {
	cycleHeader = render(CycleHeader, { isTesting: true });
	const { getByTestId } = cycleHeader;

	cycleHeaderTitle = getByTestId('current-cycle-in-string');
	goNextButton = getByTestId('goNext-button');
	goPreviousButton = getByTestId('goPrevious-button');
});


it('should have buttons with the right attributes"', async () => {
	const goNextButtonAttr = goNextButton.getAttribute('data-action-type');
	expect(goNextButtonAttr).toBe('goNext');

	const goPreviousButtonAttr = goPreviousButton.getAttribute('data-action-type');
	expect(goPreviousButtonAttr).toBe('goPrevious');
})


it('should have an initial state of "PRIMERO"', async () => {
	expect(cycleHeaderTitle).toHaveTextContent('PRIMERO');
})


it('should have "SEGUNDO" after click goNextButton', async() => {
	const expected = 'segundo'.toUpperCase();
	
	await fireEvent.click(goNextButton);
	expect(cycleHeaderTitle).toHaveTextContent(expected);
});


it('should have "PRIMERO" after click goPreviousButton', async() => {
	const expected = 'primero'.toUpperCase();

	await fireEvent.click(goPreviousButton);
	expect(cycleHeaderTitle).toHaveTextContent(expected);
});


it('should have "SEGUNDO" after scroll down on component CycleHeader', async() => {
	const expected = 'segundo'.toUpperCase();
	const scrollConfig = {
		bubbles: true,
		cancelable: false,
		deltaY: -1,
		x: 0,
		y: 0,
		deltaMode: WheelEvent.DOM_DELTA_LINE
	}	
	
	await fireEvent.wheel(cycleHeaderTitle, scrollConfig);
	expect(cycleHeaderTitle).toHaveTextContent(expected);
});


it('should have "PRIMERO" after scroll up on component CycleHeader', async() => {
	const expected = 'primero'.toUpperCase();
	const scrollConfig = {
		bubbles: true,
		cancelable: false,
		deltaY: 1,
		x: 0,
		y: 0,
		deltaMode: WheelEvent.DOM_DELTA_LINE
	}
	
	await fireEvent.wheel(cycleHeaderTitle, scrollConfig);
	expect(cycleHeaderTitle).toHaveTextContent(expected);
});
