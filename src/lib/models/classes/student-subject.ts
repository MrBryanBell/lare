import { Subject }                     from './subject';
import type { StudentSubjectProps }    from '../constructors/subject-props';
import type { SubjectStudentContract } from '../contracts/subject-student';

class StudentSubject extends Subject implements SubjectStudentContract {
	public grade : number;
	public cycle : number;

	constructor({
		id          = 'GTYS-DER',
		name        = 'Materia Provisional',
		code        = '03GC02',
		uv          = 4,
		pensumOrder = 99,
		isOptative  = false,
		grade       = 7.5,
		cycle       = 1,
	}: StudentSubjectProps) {
		super({
			id, name, code, uv, pensumOrder, isOptative,
		});
		this.grade = grade;
		this.cycle = cycle;
	}

	get umg(): number {
		return this.uv * this.grade;
	}

	get isPassed(): boolean {
		return this.grade >= 6;
	}

	toFirestoreObject() {
		return {
			id          : this.id,
			name        : this.name,
			code        : this.code,
			uv          : this.uv,
			pensumOrder : this.pensumOrder,
			isOptative  : this.isOptative,
			grade       : this.grade,
			cycle       : this.cycle,
		};
	}
}

export { StudentSubject };
