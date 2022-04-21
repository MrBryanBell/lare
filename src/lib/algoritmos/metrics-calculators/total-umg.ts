import type SubjectStudent from "$lib/classes/subject/student-subject";


function GET_TOTAL_UMG(studentSubjects: SubjectStudent[]) {
    
    let RESULT = studentSubjects
        .map((mat) => mat.UMG)
        .reduce((acc, elem) => {
            return acc + elem;
        }, 0);

    return RESULT;
}



export default GET_TOTAL_UMG;