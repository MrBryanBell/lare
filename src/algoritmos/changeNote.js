import { get } from 'svelte/store';
import { materias } from '../stores/materia_store';


function changeNote(e, ID){

    if ((e.shiftKey)){
         
        (e.deltaY < 0) 
            ? 
                materias.update((m) => {
                    let index = m.findIndex((mt) => mt.id === ID);
                    m[index].nota += 1; 
                    return m;
                })

            : 
                materias.update((m) => {
                    let index = m.findIndex((mt) => mt.id === ID);
                    m[index].nota -= 1; 
                    return m;
                })
    } 
     

    else {

        (e.deltaY < 0) 
            ? 
            materias.update((m) => {
                let index = m.findIndex((mt) => mt.id === ID);
                m[index].nota += 0.1; 
                return m;
            })
            
            : 
            materias.update((m) => {
                let index = m.findIndex((mt) => mt.id === ID);
                m[index].nota -= 0.1; 
                return m;
            })
    }
    
    console.log(get(materias)[0].nota);
}


export { changeNote };