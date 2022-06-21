import { doc, getDoc } from 'firebase/firestore/lite';
import type { Firestore, FirestoreDataConverter } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';
import type { Student } from '../../models/classes/student';
import type { Pensum } from '../../models/classes/pensum';
import { studentDocConverter } from '../../models/firestore/converters/student-doc-converter';

interface LareBigObject {
	student: Student;
	pensum: Pensum;
}

type StudentDocConverterResult = Promise<{ student: Student; pensum: Pensum }>;

export class FirestoreService {
	private static readonly db: Firestore = db;

	static async getDocument<T>(
		collectionName: string,
		documentName: string,
		DataConverter: FirestoreDataConverter<unknown>,
	): Promise<T> {
		const converter = DataConverter;

		const docRefence = doc(this.db, collectionName, documentName).withConverter(converter);
		const docSnapshot = await getDoc(docRefence);
		const data = docSnapshot.data();
		return data as T;
	}

	static async getStudentDocument(studentId: string): StudentDocConverterResult {
		const data = await this.getDocument<LareBigObject>('lareData', studentId, studentDocConverter);
		return {
			student : data.student,
			pensum  : data.pensum,
		};
	}
}

// Promise<(Student | Pensum)[]> INTERESANTE COMO SE TIPA UNA TUPLA
