/* eslint-disable space-in-parens */
import { scaleLinear } from 'd3-scale';

// TODO: debe recibir el número de ciclos en los parámetros de la función
// este dato se encuentra en el pensum de firestore,
// campo: cyclesByDefault
// probablemente deba enviar un objeto con el número de ciclos y el número de ciclos por defecto
// para que sea más fácil leer

export function getCycleProgressPercentage( currentCycle: number ) {
	const getPercentage = scaleLinear()
		.domain([0, 10])
		.range([0, 100]);

	return getPercentage(currentCycle);
}
