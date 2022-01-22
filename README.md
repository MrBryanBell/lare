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