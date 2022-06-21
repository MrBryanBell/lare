import type { Student } from './student-field';
import type { Pensum }  from './pensum-field';

export interface StudentDocument {
	student: Student;
	pensum: Pensum;
}
