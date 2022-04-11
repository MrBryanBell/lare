import { materias } from '$lib/stores/materia_store';
import { listOfSubjects } from '$lib/stores/listOfSubjects';


function deleteSubject(id) {
    let code;

    materias.update( (materias) => {
        let index = materias.findIndex( sub => sub.id === id)
        let [ removedItem ] = materias.splice(index, 1)

        //MENSAJES DE CONFIRMACIÓN
        console.log('Se removió ' + removedItem.name);
        console.table(materias);
        code = removedItem.code;

        return materias;
    })

    listOfSubjects.updateAdditions(code, -1);

}



export {
    deleteSubject,
}