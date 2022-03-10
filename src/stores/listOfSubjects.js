import { writable } from "svelte/store";


function setListOfSubjects() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe, 
        set, 
        update,

        updateAdditions: (code, value) => update(subjects => {
            let index = subjects.findIndex((sub) => sub.code === code)
            let currentSubject = subjects[index];
                currentSubject.setAdditions(value);
                return subjects;
        })
    }

}


let listOfSubjects = setListOfSubjects();



export { 
    listOfSubjects, 
};