import type { SubjectPensumConstructor } from './subject';

export interface PensumConstructor {
	id               : string;
	university       : string;
	career           : string;
	collaborators    : string[];
	subjects         : SubjectPensumConstructor[];
	createdAt        : Date;
	lastTimeModified : Date;
	usedBy           : string[];
	subjectLength    : number;
	cyclesByDefault  : number;
	maxUMG           : number;
}
