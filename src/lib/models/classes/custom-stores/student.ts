import { writable, get, derived }             from 'svelte/store';
import type { IStudentStore }                 from '../../contracts/custom-store';
import type { Student }                       from '../student';
import type { SubjectStudent }                from '../subject-student';
import type { Student as StudentInFirestore } from '../../firestore/students-collection/student-field';

export class StudentStore implements IStudentStore {
	public subscribe;
	public update;
	public set;

	constructor(init: Student) {
		const { subscribe, set, update } = writable(init);
		this.subscribe = subscribe;
		this.update = update;
		this.set = set;
	}

	get subjects$() {
		const subs = derived(this, ($this: Student) => $this.subjects);
		return subs;
	}

	get totalUmg$() {
		return derived(this, ($this: Student) => $this.totalUmg);
	}

	get totalUv$() {
		return derived(this, ($this: Student) => $this.totalUv);
	}

	get cumAcumulado$() {
		return derived(this, ($this: Student) => $this.cumAcumulado);
	}

	get cumEgresado$() {
		return derived(this, ($this: Student) => $this.cumEgresado);
	}

	toFirestoreObject(): StudentInFirestore {
		return get(this).toFirestoreObject();
	}

	findSubjectById(id: string) {
		const subject = get(this).subjects.find((subject) => subject.id === id);
		return subject;
	}

	// eslint-disable-next-line class-methods-use-this
	private _findSubjectById(subjects: SubjectStudent[], subjectId: string) {
		const subject = subjects.find((subject) => subject.id === subjectId);
		return subject;
	}

	updateSubjectGrade(subjectId: string, newGrade: number) {
		this.update((student) => {
			// eslint-disable-next-line no-underscore-dangle
			const subject = this._findSubjectById(student.subjects, subjectId);
			// eslint-disable-next-line no-unused-expressions
			subject && subject.updateGrade(newGrade);
			return student;
		});
	}

	// addSubject(subject: StudentSubject) {
	//     this.update((student) => {
	//         student.subjects = [...student.subjects, subject];
	//         return student;
	//     });
	// }

	// deleteSubject(id: string) {
	//     this.update((student) => {
	//         let index = student.subjects.findIndex((subject) => subject.id === id);
	//         let [ removedItem ] = student.subjects.splice(index, 1);

	//         console.log('Se removió ' + removedItem.name);
	//         console.table(student.subjects);
	//         return student;
	//     });
	// }
}
