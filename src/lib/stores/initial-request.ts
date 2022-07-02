/* eslint-disable align-import/align-import */
import { FirestoreService } from '../firebase/services/firestore-service';
import { student } from './student-store';

export async function getStudentData(studentId: string) {
	const studentData = await FirestoreService.getStudentDocument(studentId);
	student.set(studentData);
}
