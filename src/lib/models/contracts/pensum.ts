import type { SubjectPensum } from '../classes/subject-pensum';
import type { Pensum }        from '../firestore/students-collection/pensum-field';

export interface PensumContract {
	id                : string;
	university        : string;
	career            : string;
	collaborators     : string[];
	subjects          : SubjectPensum[];
	createdAt         : Date;
	lastTimeModified  : Date;
	usedBy            : string[];
	subjectLength     : number;
	cyclesByDefault   : number;
	maxUMG            : number;
	toFirestoreObject : () => Pensum;

	updateInscriptions : (subjectCode: string, value: number) => void;
}
