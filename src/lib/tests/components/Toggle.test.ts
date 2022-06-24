/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent } from '@testing-library/svelte';
import Toggle from '../../components/Toggle.svelte';

let toggle: RenderResult;
let checkbox: HTMLElement;
let switchh: HTMLElement;
let knob: HTMLElement;


beforeEach(() => {
	toggle = render(Toggle, { isActive: false } );
	const { getByTestId } = toggle;

	checkbox = getByTestId('checkbox');
	switchh = getByTestId('switch');
	knob = getByTestId('knob');
});


it('should NOT have "active-switch" at initial Load', () => {
	expect(switchh).not.toHaveClass('active-switch');
});


it('should NOT have "active-knob" at initial Load', () => {
	expect(knob).not.toHaveClass('active-knob');
});


it('should have style attribute "display none" at initial Load', () => {
	expect(checkbox).toHaveAttribute('style', 'display: none;');
});


it('should have should have "active-switch" after click on component', async () => {
	await fireEvent.click(switchh);
	expect(switchh).toHaveClass('active-switch');
});


it('should have "active-knob" after click on component', async () => {
	await fireEvent.click(switchh);
	expect(knob).toHaveClass('active-knob');
});


it('should make toggle styles on switch & knob after clicks', async () => {
	/* DEFAULT: DISABLED */

	await fireEvent.click(switchh);
	expect(switchh).toHaveClass('active-switch');
	expect(knob).toHaveClass('active-knob');
	
	await fireEvent.click(switchh);
	expect(switchh).not.toHaveClass('active-switch');
	expect(knob).not.toHaveClass('active-knob');

	await fireEvent.click(switchh);
	expect(switchh).toHaveClass('active-switch');
	expect(knob).toHaveClass('active-knob');
});