import { StudentStore } from '../models/classes/custom-stores/student';
import { Student } from '../models/classes/student';


const initConfig = new Student({
    id         : '',
    firstName  : '',
    lastName   : '',
    email      : '',
    university : '',
    career     : '',
    subjects   : [],
}); 


export const student = new StudentStore(initConfig);