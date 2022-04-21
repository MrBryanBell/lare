import type SubjectStudent from "$lib/classes/subject/student-subject";


function GET_CUM_EGRESADO(studentSubjects: SubjectStudent[]) {

    let MATERIAS_PASADAS = studentSubjects
        .filter( mat => mat.isPassed )
    
    let TOTAL = MATERIAS_PASADAS
        .reduce((acc, elem) => {
            acc.UMG += elem.UMG;
            acc.UV += elem.uv;

            return acc;

        }, {UMG: 0, UV: 0})

    let RESULT = TOTAL.UMG / TOTAL.UV;
    return RESULT;

}




export default GET_CUM_EGRESADO;