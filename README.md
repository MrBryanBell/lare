### TODO: 30-JUN-2022

[] -Editor de Pensum
[] -Añadir un Pensum sin materias desde la interfaz
[] -Enviar el Pensum a la base de datos
[] -Añadir materias al Pensum
[] -Actualizar una materia del pensum
[] -Eliminar una materia del pensum
[] -Ver Pensum creados



### TODO: 30-JUN-2022

[-] -Que las materias se puedan agregar
[-] -Que las materias se puedan borrar


### TODO: 30-JUN-2022

[-] -Refactorizar UI del MetricCard
[-] -Hacer interativo el Componente de Calculator (la imagen de la calculadora)
[-] -Convertir el info-icon que usa cada MetricCard, SubjectCard en un iconComponent,
		tengo 6 diferentes ícones de ese símbolo porque son diferentes colores, 
		esto no puede seguir así.
[] -Crear tooltip para funcional para los infos de los componentes, 
		se me ocurre que cada info-icon podría tener un atributo con un código y 
		ese código se utilizaría para buscar entre un array con mensajes. Ese array
		de mensajes sería un array de objetos {code, message...}, el componente tooltip
		podría validar si es hay información extra con un {#if}.
[-] -Cambiar el color de los ArrowButtons, convertirlos a componentes con svg para 
		su fácil manipulación, estudiar cómo Johnny Hopkins importa sus SVG, tiene un video
		en Youtube.











# Aprendizaje
---


### Enviar un ID simulado (forEach)

Recuerda, los forEach poseen un segundo parámetro: el index del elemento. Para efectos experimentales, podemos utilizar el valor de ese **Index** como **ID**.

Est manera me parece muy peculiar porque necesitamos modificar la data directamente en el store, así que enviamos el index de ese elemento entre la data que recibe cada componente.

```html
{#each $materias as materia, index}
	<Card data={{...materia, id: index}} />
{:else}
	<p>No hay data aún</p>
{/each}
```

De esta forma, la función que modifica la nota vive en el componente y no en su padre.

---

### Actualizar un Store complejo y de forma externa

Imagina que deseamos actualizar el valor de un **writable store** que almacena un objeto y deseamos hacerlo desde un archivo **.js** para efectos de conseguir un código modularizado.

```JavaScript
import { writable } from 'svelte/store';

let datos = writable( { name: 'Bryan', nota: 10 }); 
```

Desafíos:
- **Acceder al valor de un store desde un archivo .js**: Recuerda que las suscripciones automáticas **($)** solo funcionan en componentes de svelte. Para acceder al valor de un store desde un archivo JS, Svelte nos proporciona el método **.get()**.

```JavaScript
import { get } from 'svelte/store';
import { datos } from './store.js';

get(datos) //OUTPUT: { name: 'Bryan', nota: 10 }

```

Lamentablemente el método **.get()** solo nos será útil para conseguir el valor del store, pues según la documentación oficial, este de desuscribe automáticamente.

> Svelte's [get function](https://svelte.dev/docs#get) (which subscribes to the store to get the value and immediately unsubscribes).

Afortunadamente, basta combinar lo anterior con el método **.update()** para modifica el valor del store de forma reactiva. 

**Avertencia:** Únicamente deseamos modificar la propiedad nota del store, por lo tando debemos ejecutar el método **.update()** de la siguiente forma:

```JavaScript
let dataRef = get(datos).nota;

datos.update(d => {
	d.nota = dataRef + 0.1;
	return d;
})
```

Lo más importante es retornar la data entera luego de las modificaciones.
