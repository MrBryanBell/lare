import type { SubjectContract }                         from './subject';
import type { PensumSubject as FirestorePensumSubject } from '../firestore/students-collection/pensum-field';

export interface PensumSubjectContract extends SubjectContract {
    cycleOrigin       : number;
    inscriptions      : number;
    area              : string;
    toFirestoreObject : () => FirestorePensumSubject;
}
