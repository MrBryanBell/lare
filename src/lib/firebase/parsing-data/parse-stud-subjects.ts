import type SubjectStudentCSTR from '../../models/constructors/subject/subject-student';
import SubjectStudent from '../../classes/subject/student-subject'


function parseStudSubjects(SUBJECTS_FROM_DB: SubjectStudentCSTR[]) {
    const parsedSubjects = SUBJECTS_FROM_DB
        .map(sub => new SubjectStudent(sub));
    
    return parsedSubjects;
}


export { parseStudSubjects };