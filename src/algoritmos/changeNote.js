import { get } from 'svelte/store';
import { materias } from '../stores/materia_store';


function changeNote(e, ID){

    let currentElement = get(materias).find((mt) => mt.id === ID)
    let currentGrade = currentElement.grade.toFixed(1);

    // ¿PRESIONÓ SHIFT?
    if ((e.shiftKey))
        {
            // WHEEL UP && NOTA <= 9
            if (e.deltaY < 0 && currentGrade <= 9) 
                {
                    materias.update((m) => {
                        let index = m.findIndex((mt) => mt.id === ID);
                        m[index].grade += 1; 
                        return m;
                    })
                } 
            
            // WHEEL DOWN && NOTA >= 1
            else if (e.deltaY > 0 && currentGrade >= 1 )
                {
                    materias.update((m) => {
                        let index = m.findIndex((mt) => mt.id === ID);
                        m[index].grade -= 1; 
                        return m;
                    })
                }

        } 
     

    else 
        {
            // WHEEL UP && NOTA MENOR A 10
            if (e.deltaY < 0 && currentGrade < 10) 
                {
                    materias.update((m) => {
                        let index = m.findIndex((mt) => mt.id === ID);
                        m[index].grade += 0.1; 
                        return m;
                    })
                } 
            
            // WHEEL DOWN && NOTA MENOR A 10
            else if (e.deltaY > 0 && currentGrade > 0.0 )
                {
                    materias.update((m) => {
                        let index = m.findIndex((mt) => mt.id === ID);
                        m[index].grade -= 0.1; 
                        return m;
                    })
                }
        }
    
    // console.log(get(materias)[0].nota);
}


export { changeNote };