import Subject from "$lib/classes/subject/subject";
import type SubjectPensumCSTR from '$lib/models/constructors/subject/subject-pensum'
import type SubjectContract from "$lib/models/contracts/subject";


class SubjectPensum extends Subject implements SubjectContract  {
    
    public additions: number;
    public area: string;

    constructor({
        id              = "GTYS-DER",
        name            = "Materia Provisional",
        code            = "03GC02",
        uv              = 4,
        pensumOrder     = 99,
        isOptative      = false,
        additions       = 0,
        area            = 'gc',   
    } 
        : SubjectPensumCSTR
    ) {
        super({ 
            id, 
            name, 
            code, 
            uv, 
            pensumOrder, 
            isOptative 
        });
        this.additions = additions;
        this.area = area;
    }


}




export default SubjectPensum;