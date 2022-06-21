import type { SubjectStudentConstructor } from './subject';
import type { UserConstructor }           from './user';

export interface StudentConstructor extends UserConstructor {
	university : string;
	career     : string;
	subjects   : SubjectStudentConstructor[];
}
