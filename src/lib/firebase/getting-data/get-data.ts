import { getStudSubjects } from './get-student-subjects';
import { getPensum } from './get-pensum';


async function getData(COLLECTION_ID: string, DOCUMENT_ID: string) {

    const { RAW_STUDENT_SUBJECTS, PENSUM_DB_REF } = await getStudSubjects(COLLECTION_ID, DOCUMENT_ID);
    const { RAW_PENSUM_DETAILS, RAW_PENSUM_SUBJECTS } = await getPensum(PENSUM_DB_REF);

    return {
        RAW_STUDENT_SUBJECTS,
        RAW_PENSUM_DETAILS,
        RAW_PENSUM_SUBJECTS,
    };
        
}


export { getData };
