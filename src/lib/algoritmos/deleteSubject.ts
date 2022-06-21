import { pensum }  from '../stores/pensum-store';
import { student } from '../stores/student-store';

function deleteSubject(id: string, pensumOrder: number) {
	student.deleteSubject(id);
	pensum.updateSubjectAdditions(pensumOrder, -1);
}

export { deleteSubject };
