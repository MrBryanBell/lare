import { derived, writable } from "svelte/store";

let nombreCiclos = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno', 'décimo'];
let cicloActual = writable(1);

let cicloActualEnTexto = derived(cicloActual, 
                            ($cicloActual) => {
                            
                                let index = $cicloActual;
                                return nombreCiclos[index - 1];
                            }
                        );

export { cicloActualEnTexto, cicloActual };