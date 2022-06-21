import { FirestoreService } from '../firebase/services/firestore-service';
import { pensum as pensumStore } from './pensum-store';
import { student as studentStore } from './student-store';


export async function getStudentData(userId: string) {
    const { student, pensum } = await FirestoreService.getStudentDocument(userId);

    pensumStore.set(pensum);
    studentStore.set(student);
}