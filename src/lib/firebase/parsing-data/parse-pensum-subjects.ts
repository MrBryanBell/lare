import type SubjectPensumCSTR from '$lib/models/constructors/subject/subject-pensum';
import SubjectPensum from '../../classes/subject/pensum-subject';

function parsePensumSubjects (SUBJECTS_FROM_DB: SubjectPensumCSTR[]) {
    const parsedSubjects = SUBJECTS_FROM_DB
        .map(sub => new SubjectPensum(sub));

    return parsedSubjects;
}


export { parsePensumSubjects };