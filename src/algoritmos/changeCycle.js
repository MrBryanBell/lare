import { get } from 'svelte/store';
import { cicloActual } from '../stores/cycle_store';


function changeCycle(e, qty){

    let itWasClick = e.type === 'click';
    let itWasWheel = e.type === 'wheel';

    let currentValue = get(cicloActual);

    if (itWasClick) {

        // CLICK EN -1 && CICLO NO SEA 1
            if((qty === -1) && (currentValue !== 1))
                return cicloActual.update((c) => currentValue + qty );

        // CLICK EN +1 && CICLO NO SEA 10
            if((qty === 1) && (currentValue !== 10))
                return cicloActual.update((c) => currentValue + qty );
                
    }


    if (itWasWheel) {

        // WHEEL UP && CICLO NO SEA 10
            if (e.deltaY < 0 && currentValue !== 10) {
                cicloActual.update((c) => currentValue + 1 )
            } 
        
        // WHEEL DOWN && CICLO NO SEA 1
            else if ( e.deltaY > 0 && currentValue !== 1) {
                cicloActual.update((c) => currentValue - 1 );
            }
    }

}


export { changeCycle };