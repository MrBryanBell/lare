interface StudentSubject {
    id          : string;
    name        : string;
    code        : string;
    uv          : number;
    pensumOrder : number;
    isOptative  : boolean;
    grade       : number;
    cycle       : number;
}


interface Student {
    id         : string;
    firstName  : string;
    lastName   : string;
    email      : string;
    university : string;
    career     : string;
    subjects   : StudentSubject[];
}


export type {
    Student,
    StudentSubject,
}