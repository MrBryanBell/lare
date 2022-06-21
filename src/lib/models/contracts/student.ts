import type { UserContract }                from './user';
import type { SubjectStudent }              from '../classes/subject-student';
import type { Student as FirestoreStudent } from '../firestore/students-collection/student-field';

export interface StudentContract extends UserContract {
	university        : string;
	career            : string;
	subjects          : SubjectStudent[];
	totalUv           : number;
	totalUmg          : number;
	cumAcumulado      : number;
	cumEgresado       : number;
	toFirestoreObject : () => FirestoreStudent;
}
