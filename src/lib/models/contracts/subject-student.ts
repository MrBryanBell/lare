import type { SubjectContract }                           from './subject';
import type { StudentSubject as FirestoreStudentSubject } from '../firestore/students-collection/student-field';

export interface SubjectStudentContract extends SubjectContract {
	grade             : number;
	cycle             : number;
	umg               : number;
	isPassed          : boolean;
	toFirestoreObject : () => FirestoreStudentSubject;
}
