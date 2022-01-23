import { writable } from "svelte/store";

let cycles = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Octavo', 'Noveno', 'Decimo'];
let cicloActual = writable(1);

export { cycles, cicloActual }; 