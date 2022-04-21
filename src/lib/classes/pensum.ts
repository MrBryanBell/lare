import type PensumCSTR from '../models/constructors/pensum';
import type SubjectPensum from './subject/pensum-subject';


class Pensum {
    public id: string;
    public university: string;
    public faculty: string;
    public career: string;
    public collaborators: string[];
    public subjects: SubjectPensum[];

    constructor({
        id = '',
        university = '',
        faculty = '',
        career = '',
        collaborators = [],
        subjects = [],
    }
        : PensumCSTR ) 
    {
        this.id = id;
        this.university = university;
        this.faculty = faculty;
        this.career = career;
        this.collaborators = collaborators;
        this.subjects = subjects;
    }

}


export default Pensum;