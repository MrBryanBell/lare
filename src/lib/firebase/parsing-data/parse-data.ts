import { parseStudSubjects } from './parse-stud-subjects';
import { parsePensumSubjects } from './parse-pensum-subjects';
import type SubjectPensumCSTR from '../../models/constructors/subject/subject-pensum';
import type SubjectStudentCSTR from '../../models/constructors/subject/subject-student'


export function parseData(
    STUDENT_SUBJECTS_FROM_DB: SubjectStudentCSTR[], 
    PENSUM_SUBJECTS_FROM_DB: SubjectPensumCSTR[]
    ) {
        const PARSED_PENSUM_SUBJECTS = parsePensumSubjects(PENSUM_SUBJECTS_FROM_DB);
        const PARSED_STUD_SUBJECTS = parseStudSubjects(STUDENT_SUBJECTS_FROM_DB);

        return {
            PARSED_STUD_SUBJECTS, 
            PARSED_PENSUM_SUBJECTS
        };
    }