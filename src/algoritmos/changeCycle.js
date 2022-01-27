import { get } from 'svelte/store';
import { cicloActual } from '../stores/cycle_store';


function changeCycle(e){

    let currentValue = get(cicloActual);

    // WHEEL UP && CICLO NO SEA 10
        if (e.deltaY < 0 && currentValue !== 10) {
            cicloActual.update((c) => currentValue + 1 )
        } 
    
    // WHEEL DOWN && CICLO NO SEA 1
        else if ( e.deltaY > 0 && currentValue !== 1) {
            cicloActual.update((c) => currentValue - 1 );
        }

}


export { changeCycle };