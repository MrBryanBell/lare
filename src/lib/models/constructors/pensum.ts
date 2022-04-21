import type SubjectPensum from '$lib/classes/subject/pensum-subject';


interface PensumCSTR {
    id: string;
    university: string;
    faculty: string;
    career: string;
    collaborators: string[];
    subjects: SubjectPensum[];
}


export default PensumCSTR;