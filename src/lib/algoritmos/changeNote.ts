import { get }     from 'svelte/store';
import { student } from '../stores/student-store';

export function changeNote(event: WheelEvent, subjectId: string) {
	const shiftPressed = event.shiftKey;
	const wheelUp      = event.deltaY < 0;
	const wheelDown    = event.deltaY > 0;

	const subject      = student.findSubjectById(subjectId);
	const subjectGrade = subject!.grade;

	if (shiftPressed) {
		if (wheelUp && subjectGrade <= 9) {
			student.updateSubjectGrade(subjectId, 1);
		}

		if (wheelDown && subjectGrade >= 1) {
			student.updateSubjectGrade(subjectId, -1);
		}
	}

	if (!shiftPressed) {
		if (wheelUp && subjectGrade < 10) {
			student.updateSubjectGrade(subjectId, 0.1);
		}

		if (wheelDown && subjectGrade > 0.0) {
			student.updateSubjectGrade(subjectId, -0.1);
		}
	}
}

// console.log(get(materias)[0].nota);
