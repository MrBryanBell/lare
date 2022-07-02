import type { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Student }                    from '../../classes/student';
import type { StudentDocument }       from '../students-collection/student-document';

/*
Al enviar data a Firestore con los métodos setDoc, updateDoc...
Estaré enviando un solo objeto con esta estructura antes de pasa por el converter.
A pesar que Student y Pensum son objetos distintos,
solo puedo enviar un objeto en los métodos setDoc, updateDoc...
*/

export const studentDocConverter = {

	fromFirestore: (snapshot: QueryDocumentSnapshot<StudentDocument>) => {
		const docSnap = snapshot.data();
		return new Student(docSnap);
	},

	toFirestore: () => ({ nada: 'nada' }),
};
