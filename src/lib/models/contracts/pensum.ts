import type { PensumSubject } from '../classes/pensum-subject';

export interface PensumContract {
	id                : string;
	university        : string;
	career            : string;
	collaborators     : string[];
	subjects          : PensumSubject[];
	createdAt         : Date;
	lastTimeModified  : Date;
	usedBy            : string[];
	subjectLength     : number;
	cyclesByDefault   : number;
	maxUMG            : number;
}
