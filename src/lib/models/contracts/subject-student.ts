import type { SubjectContract } from './subject';

export interface SubjectStudentContract extends SubjectContract {
	grade    : number;
	cycle    : number;
	umg      : number;
	isPassed : boolean;
}
