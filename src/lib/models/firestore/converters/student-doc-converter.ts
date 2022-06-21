import type { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Student }                    from '../../classes/student';
import { Pensum }                     from '../../classes/pensum';
import type { PensumStore }           from '../../classes/custom-stores/pensum';
import type { StudentStore }          from '../../classes/custom-stores/student';
import type { StudentDocument }       from '../students-collection/student-document';

/*
Al enviar data a Firestore con los métodos setDoc, updateDoc...
Estaré enviando un solo objeto con esta estructura antes de pasa por el converter.
A pesar que Student y Pensum son objetos distintos,
solo puedo enviar un objeto en los métodos setDoc, updateDoc...
*/

type StoresToConvert = {
	studentStore : StudentStore;
	pensumStore  : PensumStore;
};

export const studentDocConverter = {
	toFirestore: ({ studentStore, pensumStore }: StoresToConvert) => ({
		student : studentStore.toFirestoreObject(),
		pensum  : pensumStore.toFirestoreObject(),
	}),

	fromFirestore: (snapshot: QueryDocumentSnapshot<StudentDocument>) => {
		const DocData = snapshot.data();

		const student = new Student(DocData.student);
		const pensum  = new Pensum(DocData.pensum);

		return {
			student,
			pensum,
		};
	},
};
