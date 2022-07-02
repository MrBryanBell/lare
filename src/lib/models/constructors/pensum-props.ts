import type { PensumSubjectProps } from './subject-props';

export interface PensumProps {
	id               : string;
	university       : string;
	career           : string;
	collaborators    : string[];
	createdAt        : Date | undefined;
	lastTimeModified : Date | undefined;
	usedBy           : string[];
	subjects         : PensumSubjectProps[];
	subjectLength    : number;
	cyclesByDefault  : number;
	maxUMG           : number;
}
