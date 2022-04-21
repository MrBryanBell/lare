import type SubjectCSTR from '../../models/constructors/subject/subject';
import type SubjectContract from '$lib/models/contracts/subject';


abstract class Subject implements SubjectContract {
    
    public id: string;
    public name: string;
    public code: string;
    public uv: number;
    public pensumOrder: number;
    public isOptative: boolean;


    constructor({
        id,
        name,
        code,
        uv,
        pensumOrder,
        isOptative,
    }
        : SubjectCSTR
    ){
        this.id = id;
        this.name = name;
        this.code = code;
        this.uv = uv;
        this.pensumOrder = pensumOrder;
        this.isOptative = isOptative;
    }

}


export default Subject;