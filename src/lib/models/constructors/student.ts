import type UserCSTR from "./user";
import type SubjectStudent from '../../classes/subject/student-subject'


interface StudentCSTR extends UserCSTR {
    university: string;
    faculty: string;
    career: string;
    subjects: SubjectStudent[];
}


export default StudentCSTR;