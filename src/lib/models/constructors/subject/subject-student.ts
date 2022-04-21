import type SubjectCSTR from './subject';


interface SubjectStudentCSTR extends SubjectCSTR {
    grade: number;
    cycle: number;
}


export default SubjectStudentCSTR;