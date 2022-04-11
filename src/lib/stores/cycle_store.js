import { derived, writable } from 'svelte/store';
import * as d3 from 'd3';
import { scaleBand, scaleLinear, scaleSqrt } from 'd3-scale';

let nombreCiclos = [
	'primero',
	'segundo',
	'tercero',
	'cuarto',
	'quinto',
	'sexto',
	'séptimo',
	'octavo',
	'noveno',
	'décimo',
];

let cicloActual = writable(1);

let cicloActualEnTexto = derived(cicloActual, ($cicloActual) => {
	let index = $cicloActual;
	return nombreCiclos[index - 1];
});

let barPerc = derived(cicloActual, ($cicloActual) => {
	const getPerc = d3.scaleLinear().domain([0, 10]).range([0, 100]);
	let num = getPerc($cicloActual);
	return num;
});

export { cicloActualEnTexto, cicloActual, barPerc };
