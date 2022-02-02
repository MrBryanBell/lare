import { listOfSubjects } from './listOfSubjects';

let code = '03GC02';

let materia = listOfSubjects
                .find((sub) => sub.code === code);

