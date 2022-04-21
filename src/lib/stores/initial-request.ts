import { getData } from '../firebase/getting-data/get-data';
import { parseData } from '../firebase/parsing-data/parse-data';

import pensum from './pensum-store';
import Pensum from '../classes/pensum';

import student from './student-store';
import Student from '../classes/student';


async function getDataFromDB(USER_UID: string) {

    const { 
        RAW_STUDENT_SUBJECTS, 
        RAW_PENSUM_DETAILS, 
        RAW_PENSUM_SUBJECTS 
    } = await getData('lareData', USER_UID);


    const { 
        PARSED_STUD_SUBJECTS, 
        PARSED_PENSUM_SUBJECTS 
    } = parseData(RAW_STUDENT_SUBJECTS, RAW_PENSUM_SUBJECTS);


    PARSED_STUD_SUBJECTS.forEach(({ pensumOrder }) => {
        PARSED_PENSUM_SUBJECTS[pensumOrder - 1].additions += 1;
    });


    pensum.set(
        new Pensum({
            id: '1',
            university: 'Universidad Dr. José Matías Delgado',
            faculty: 'Facultad de Ciencias y Artes',
            career: 'Ciencias de la Comunicación',
            collaborators: ['Bryan Bell'],
            subjects: PARSED_PENSUM_SUBJECTS,
        })
    );

    student.set(
        new Student({
            id: '1',
            name: 'Bryan',
            lastName: 'Bell',
            email: 'bryanbellabc@gmail.com',
            university: 'Universidad Dr. José Matías Delgado',
            faculty: 'Facultad de Ciencias y Artes',
            career: 'Ciencias de la Comunicación',
            subjects: PARSED_STUD_SUBJECTS,
        })
    );

}


export default getDataFromDB;