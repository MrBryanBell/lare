import type {
	Unsubscriber, Subscriber, Updater, Readable,
} from 'svelte/store';
import type { Pensum }                              from '../classes/pensum';
import type { SubjectPensum }                       from '../classes/subject-pensum';
import type { Student }                             from '../classes/student';
import type { SubjectStudent }                      from '../classes/subject-student';
import type { Student as StudentFieldInStudentDoc } from '../firestore/students-collection/student-field';
import type { Pensum as PensumFieldInStudentDoc }   from '../firestore/students-collection/pensum-field';

type Invalidator<T> = (value?: T) => void;

interface CustomStore<T> {
	subscribe : (this: void, run: Subscriber<T>, invalidate?: Invalidator<T>) => Unsubscriber;
	update    : (this: T, updater: Updater<T>) => void;
	set       : (this: void, value: T) => void;
}

interface IPensumStore extends CustomStore<Pensum> {
	subjects$                 : Readable<SubjectPensum[]>;
	updateSubjectInscriptions : (subjectCode: string, value: number) => void;
	toFirestoreObject         : () => PensumFieldInStudentDoc;
}

interface IStudentStore extends CustomStore<Student> {
	subjects$         : Readable<SubjectStudent[]>;
	totalUmg$         : Readable<number>;
	totalUv$          : Readable<number>;
	cumAcumulado$     : Readable<number>;
	cumEgresado$      : Readable<number>;
	toFirestoreObject : () => StudentFieldInStudentDoc;
}

export type { IPensumStore, IStudentStore };
