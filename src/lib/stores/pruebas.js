import { listOfSubjects } from '$lib/stores/listOfSubjects';

let code = '03GC02';

let materia = listOfSubjects
                .find((sub) => sub.code === code);

