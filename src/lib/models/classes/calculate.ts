/* eslint-disable camelcase */
import type { SubjectStudent } from './subject-student';

export class Calculate {
	static total_umg(subjects: SubjectStudent[]) {
		const result = subjects.map((subject) => subject.umg).reduce((acc, curr) => acc + curr, 0);

		return result;
	}

	static total_uv(subjects: SubjectStudent[]) {
		const result = subjects.map((subject) => subject.uv).reduce((acc, curr) => acc + curr, 0);

		return result;
	}

	static cum_acumulado(total_umg: number, total_uv: number) {
		const result = total_umg / total_uv;
		return result;
	}

	static cum_egresado(subjects: SubjectStudent[]) {
		const approvedSubjects = subjects.filter((mat) => mat.isPassed);

		const total = approvedSubjects.reduce(
			(acc, elem) => {
				acc.umg += elem.umg;
				acc.uv += elem.uv;

				return acc;
			},
			{ umg: 0, uv: 0 },
		);

		const result = total.umg / total.uv;
		return result;
	}
}
