/* eslint-disable */
import { getScrollDirection } from "./get-scroll-direction";
import { student } from '../stores/student-store';

type ScrollDirection = 'up' | 'down';

interface SubjectProps {
	id: string;
	grade: number;
}

export function shiftGradeByScroll(event: WheelEvent, { id, grade }: SubjectProps) {
	const shiftPressed = event.shiftKey;
	const scrollDirection: ScrollDirection = getScrollDirection(event);
	const wheelUp      = scrollDirection === 'up';
	const wheelDown    = scrollDirection === 'down';
	
	if (shiftPressed) {
		if (wheelUp && grade <= 9)
			return student.shiftGrade(id, 1);
		

		if (wheelDown && grade >= 1)
			return student.shiftGrade(id, -1);
	}

	if (!shiftPressed) {
		if (wheelUp && grade < 10) 
			return student.shiftGrade(id, 0.1);

		if (wheelDown && grade > 0)
			return student.shiftGrade(id, -0.1);
	}
}


function shiftGradeByClick() {}
