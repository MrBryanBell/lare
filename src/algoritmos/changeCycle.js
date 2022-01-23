import { get } from 'svelte/store';
import { cicloActual } from '../stores/cycle_store';


function changeCycle(e){

    let currentValue = get(cicloActual);

        (e.deltaY < 0) 
            ? 
            cicloActual.update((c) => currentValue + 1 )
            
            : 
            cicloActual.update((c) => currentValue - 1 );
    
}


export { changeCycle };