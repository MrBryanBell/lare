/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent, cleanup } from '@testing-library/svelte';
import PruebaCounter from '../../components/PruebaCounter.svelte';


let pruebaCounter: RenderResult;
let button: HTMLElement;
let h1: HTMLElement;
let span : HTMLElement;

beforeEach(() => {
	pruebaCounter = render(PruebaCounter, { isTesting: true });
	const { getByTestId } = pruebaCounter;

	button = getByTestId('button');
	h1 = pruebaCounter.getByTestId('h1');
	span = pruebaCounter.getByTestId('span');
});


it('assas ', async () => {
	expect(pruebaCounter).toBeTruthy();
	expect(h1).toBeTruthy();
	expect(h1).toHaveTextContent('primero');
	expect(button).toHaveAttribute('data-action-type');
	
	const buttonAttrValue = button.getAttribute('data-action-type');
	expect(buttonAttrValue).toBe('goNext');

	await fireEvent.click(button);
	
	expect(h1).toHaveTextContent('segundo');
	expect(span).toHaveTextContent('casi casi');

	const bgColor = button.dataset.bgColor;
	expect(bgColor).toBe('rgb(240, 240, 240)');
})


// it('assas ', async () => {
// 	expect(h1).toHaveTextContent('segundo');
	
// 	await fireEvent.click(button);
// 	expect(h1).toHaveTextContent('tercero');
	
// 	await fireEvent.click(button);
// 	expect(h1).toHaveTextContent('cuarto');

// })



// separar los test en archivos distintos
// exportar los renders para no tener que inicializarlo cada vez
// hacer todo el test en un solo it()
// inicializar el render en cada test, los test serán largos, pero se mantendrán en un solo archivo, quizá esto solo suceda para los componentes, no utiliza´re beforeEach() para inicializar el render.
// otra opción es seguirle la lógica a los test, ok, ya sé que no se borrá después de click, así que sé que viene un un value de 3, por ejemplo, hago un comentario al inciciar el test para recordarlo.

// el store es el problema, el store preserva el estado.
// los valores que vienen del store preservan su estado
// los valores locales del componente no preservan su estado

// los Key Block de svelte son otro problema, retornan el estado incial del componente siempre
// agregar una condición que devuelva el store o false es la solución
// recuerda que la función de los bloques key es montar el componente cada vez que cambie la variable para que funcione la transition (in:, out:, transition:)

// EN RESUMEN: Para que funcione deberé hacer 2 cosas:
// seguir la lógica de los test, sabiendo que cuando utilizan store su estado no se reinicia
// agregar un prop al componente (isTesting: false | true) para cuando hayan Key Blocks, se desactiven en los Tests

// POR EL MOMENTO, no se pueden acceder a los estilos del componente,
// ni siquiera a los estados en línea que son declarados la directiva style:
// pero ya que sí puedo ingresar a los atributos como data-bg-color, data-action-type, etc, puedo volverlos dinámicos en el componente