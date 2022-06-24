/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent, cleanup } from '@testing-library/svelte';
import ArrowButton from '../../components/ArrowButton.svelte';


it('should have some value attribute src', () => {
	const { getByTestId } = render(ArrowButton, { actionType:'goPrevious' });
	const imgGoPreviousButton = getByTestId('goPrevious-button');
	
	expect(imgGoPreviousButton).toHaveAttribute('src', '/icons/arrow-circle.svg');
});


it('should NOT have class "rotate-80deg" after load', () => {
	const { getByTestId } = render(ArrowButton, { actionType:'goPrevious' });
	const imgGoPreviousButton = getByTestId('goPrevious-button');

	expect(imgGoPreviousButton).not.toHaveClass('rotate-80deg');
});


it('should have class "rotate-80deg" after load', () => {
	const { getByTestId } = render(ArrowButton, { actionType:'goNext' });
	const imgGoNextButton = getByTestId('goNext-button');

	expect(imgGoNextButton).toHaveClass('rotate-80deg');
});