/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent } from '@testing-library/svelte';
import MetricCard from '../../components/MetricCard.svelte';

const componentProps = {
	name             : "Cum Acumulado",
	value            : 8.5645,
	placeholderName  : 'AGG',
	placeholderValue : 2,
};

let metricCard: RenderResult;
let metricName: HTMLElement;
let metricValue: HTMLElement;
let metricPlaceholderName: HTMLElement;
let metricPlaceholderValue: HTMLElement;


beforeEach(() => {
	metricCard = render(MetricCard, );
	const { getByTestId } = metricCard;

	metricName = getByTestId('metric-name');
	metricValue = getByTestId('metric-value');
	metricPlaceholderName = getByTestId('metric-placeholder-name');
	metricPlaceholderValue = getByTestId('metric-placeholder-value');
});


it('should have the value 8.5645 in textContent', () => {
	const expected = "8.5645";
	expect(metricValue).toBeTruthy;

	expect(metricValue).toHaveTextContent(expected);
});

it('should have "Cum Acumulado" in textContent', () => {
	
});

it('should have "02" in textContent', () => {
	
});

it('should have "AGG" in textContent', () => {
	
});