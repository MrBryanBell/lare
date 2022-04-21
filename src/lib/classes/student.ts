import User from "./user";
import type UserContract from "$lib/models/contracts/user";
import type StudentCSTR from "../models/constructors/student";
import type SubjectStudent from "./subject/student-subject";


import GET_TOTAL_UV from '../algoritmos/metrics-calculators/total-uv';
import GET_TOTAL_UMG from '../algoritmos/metrics-calculators/total-umg';
import GET_CUM_ACUMULADO from '../algoritmos/metrics-calculators/cum-acumulado';
import GET_CUM_EGRESADO from '../algoritmos/metrics-calculators/cum-egresado';


class Student extends User implements UserContract {
    
    public university: string;
    public faculty: string;
    public career: string;
    public subjects: SubjectStudent[];

    constructor({
        id = '',
        name = '',
        lastName = '',
        email = '',
        university = '',
        faculty = '',
        career = '',
        subjects = [],
    } 
        : StudentCSTR
    ){
        super({
            id,
            name,
            lastName,
            email,
        });
        this.university = university;
        this.faculty = faculty;
        this.career = career;
        this.subjects = subjects;
    }


    get TOTAL_UV() {
        return GET_TOTAL_UV(this.subjects);
    }

    get TOTAL_UMG() {
        return GET_TOTAL_UMG(this.subjects);
    }

    get CUM_ACUMULADO() {
        return GET_CUM_ACUMULADO(this.TOTAL_UMG, this.TOTAL_UV);
    }

    get CUM_EGRESADO() {
        return GET_CUM_EGRESADO(this.subjects);
    }
    
}



export default Student;