import { writable, get, derived } from 'svelte/store';
import type Student from '../student';
import type StudentSubject from '../subject/student-subject';


class Wr_Student {

    public set;
	public update;
    public subscribe;

    constructor(init: Student) {
		let { subscribe, set, update } = writable(init);
		this.subscribe = subscribe;
		this.set = set;
		this.update = update;
	}

    get subjects() {
        let subs = derived(this, ($this) => ($this as Student).subjects);
		return subs;
    }

    addSubject(subject: StudentSubject) {
        this.update((student) => {
            student.subjects = [...student.subjects, subject];
            return student;
        });
    }

    findSubject(id: string) {
        // SOLUCIÓN: (get(this) as Student)
        let subject = get(this).subjects.find((subject) => subject.id === id);
        return subject;
    }

    updateGrade(id: string, value: number) {
        this.update((student) => {
            let index = student.subjects.findIndex((subject) => subject.id === id);
            student.subjects[index].grade += value;
            return student;
        });
    }

    deleteSubject(id: string) {
        this.update((student) => {
            let index = student.subjects.findIndex((subject) => subject.id === id);
            let [ removedItem ] = student.subjects.splice(index, 1);

            console.log('Se removió ' + removedItem.name);
            console.table(student.subjects);
            return student;
        });
    }
    
}


export default Wr_Student;