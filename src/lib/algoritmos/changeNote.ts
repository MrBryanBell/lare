import { get } from 'svelte/store';
import student from '../stores/student-store';


function changeNote(e: WheelEvent, ID: string) {
    // let { STUDENT_SUBJECTS } = get(STUDENT_STORE);

    // let currentElement = get(STUDENT_SUBJECTS).find((mt) => mt.id === ID)
    let currentElement = student.findSubject(ID);

    let currentGrade = currentElement.grade;

    // ¿PRESIONÓ SHIFT?
    if ((e.shiftKey))
        {
            // WHEEL UP && NOTA <= 9
            if (e.deltaY < 0 && currentGrade <= 9) 
                return student.updateGrade(ID, 1);

            // WHEEL DOWN && NOTA >= 1
            else if (e.deltaY > 0 && currentGrade >= 1 )
                return student.updateGrade(ID, -1);

        } 
     

    else {
            // WHEEL UP && NOTA MENOR A 10
            if (e.deltaY < 0 && currentGrade < 10) 
                return student.updateGrade(ID, 0.1);
            
            // WHEEL DOWN && NOTA MENOR A 10
            else if (e.deltaY > 0 && currentGrade > 0.0 )
                return student.updateGrade(ID, -0.1);
        }
    
    // console.log(get(materias)[0].nota);
}


export { changeNote };