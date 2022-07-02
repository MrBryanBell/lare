/* eslint-disable align-import/align-import */
import {
 doc, getDoc, type Firestore, type FirestoreDataConverter,
} from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';
import type { Student } from '../../models/classes/student';
import { studentDocConverter } from '../../models/firestore/converters/student-doc-converter';

type StudentDocConverterResult = Promise<Student>;

export class FirestoreService {
	private static readonly db: Firestore = db;

	static async getDocument<T>(
		collectionName: string,
		documentName: string,
		DataConverter?: FirestoreDataConverter<unknown>,
	): Promise<T> {
		let docReference;

		if (DataConverter) {
			docReference = doc(this.db, collectionName, documentName).withConverter(DataConverter);
		} else {
			docReference = doc(this.db, collectionName, documentName);
		}

		const docSnapshot = await getDoc(docReference);
		const data = docSnapshot.data();
		return data as T;
	}

	static async getStudentDocument(studentId: string): StudentDocConverterResult {
		const studentData = await this.getDocument<Student>('lareData', studentId, studentDocConverter);
		return studentData;
	}
}

// Promise<(Student | Pensum)[]> INTERESANTE COMO SE TIPA UNA TUPLA
