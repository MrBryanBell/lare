import Wr_Student from '$lib/classes/custom-stores/student';
import Student from '../classes/student';

const initConfig = new Student({
    id: '',
    name: '',
    lastName: '',
    email: '',
    university: '',
    faculty: '',
    career: '',
    subjects: [],
}); 


const student = new Wr_Student(initConfig);


export default student;