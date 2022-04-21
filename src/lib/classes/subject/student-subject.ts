import Subject from "$lib/classes/subject/subject";
import type SubjectStudentCSTR from "$lib/models/constructors/subject/subject-student";
import type SubjectContract from '$lib/models/contracts/subject';


class SubjectStudent extends Subject implements SubjectContract {

    public grade: number;
    public cycle: number;


    constructor({
        id              = "GTYS-DER", 
        name            = "Materia Provisional",
        code            = "03GC02", 
        uv              = 4,
        pensumOrder     = 99,
        isOptative      = false,
        grade           = 7.5,
        cycle           = 1,
    }
        : SubjectStudentCSTR
    ) {
        super({ 
            id, 
            name, 
            code, 
            uv, 
            pensumOrder, 
            isOptative 
        });
        this.grade = grade;
        this.cycle = cycle;
    }


    get UMG(): number {
        return this.uv * this.grade;
    }

    get isPassed(): boolean {
        return this.grade >= 6;
    }
}



export default SubjectStudent;