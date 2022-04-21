import type SubjectStudent from "$lib/classes/subject/student-subject";


function GET_TOTAL_UV(studentSubjects: SubjectStudent[]) {
    
    let RESULT  =  studentSubjects
        .map((mat) => mat.uv)
        .reduce((acc, elem) => {
            return acc + elem;
        }, 0);
    return RESULT;

}


export default GET_TOTAL_UV;