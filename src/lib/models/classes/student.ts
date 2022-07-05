/* eslint-disable */
import { User }                               from './user';
import { StudentSubject }                     from './student-subject';
import type { PensumSubject } from './pensum-subject';
import { Pensum }                             from './pensum';
import { Calculate }                          from './calculate';
import type { StudentProps }            from '../constructors/students-props';
import type { StudentContract }               from '../contracts/student';
import type { StudentSubjectProps } from '../constructors/subject-props';
import { round } from '../../actions/round-number';
import { cycle } from '../../stores/cycle-counter-store';

class Student extends User implements StudentContract {
	public university : string;
	public career     : string;
	public subjects   : StudentSubject[];
	public pensum     : Pensum;

	constructor({
		id         = 'NO DATA',
		firstName  = 'NO DATA',
		lastName   = 'NO DATA',
		email      = 'NO DATA',
		university = 'NO DATA',
		career     = 'NO DATA',
		subjects   = [],
		pensum     = {
			id               : 'NO DATA',
			university       : 'NO DATA',
			career           : 'NO DATA',
			collaborators    : [],
			createdAt        : undefined,
			lastTimeModified : undefined,
			usedBy           : [],
			subjects         : [],
			subjectLength    : 0,
			cyclesByDefault  : 0,
			maxUMG           : 0,
		},
	}: StudentProps) {
		super({
			id, firstName, lastName, email,
		});
		this.university = university;
		this.career     = career;
		this.subjects   = subjects.map((subject) => new StudentSubject(subject));
		this.pensum     = new Pensum(pensum);
	}

	get totalUv() {
		return Calculate.total_uv(this.subjects);
	}

	get totalUmg() {
		return Calculate.total_umg(this.subjects);
	}

	get cumAcumulado() {
		return Calculate.cum_acumulado(this.totalUmg, this.totalUv);
	}

	get cumEgresado() {
		return Calculate.cum_egresado(this.subjects);
	}

	createSubject(pensumSubject: PensumSubject) {
		const newSubject = new StudentSubject({
			id: self.crypto.randomUUID(),
			name: pensumSubject.name,
			code: pensumSubject.code,
			uv: pensumSubject.uv,
			pensumOrder: pensumSubject.pensumOrder,
			isOptative: pensumSubject.isOptative,
			grade: 0,
			cycle: cycle.number,
		});

		return newSubject;
	}

	enroll(subjectCode: string, subjectIndex: number) {
		const pensumSubject = this.pensum.findSubject(subjectCode)!;
		const newSubject = this.createSubject(pensumSubject);

		// this workaround is because of problems between Sortable and Svelte
		let todasLasMateriasMenosEsteCiclo = this.subjects.filter((subject) => subject.cycle !== cycle.number);
		let materiasCicloActual = this.subjects.filter((subject) => subject.cycle === cycle.number);
		materiasCicloActual.splice(subjectIndex, 0, newSubject);
		this.subjects = [...todasLasMateriasMenosEsteCiclo, ...materiasCicloActual];

		this.pensum.addEnrollment(pensumSubject.code);
		
		return this;
	}

	private _findSubject(subjectId: string) {
		return this.subjects.find((subject) => subject.id === subjectId);
	}

	shiftGrade(subjectId: string, value: number) {
		const currentGrade = this._findSubject(subjectId)!.grade;
		const result = round(currentGrade + value, 1);
		this._findSubject(subjectId)!.grade = result;
		return this;
	}

	// deleteSubject(id: string) {
	//     this.update((student) => {
	//         let index = student.subjects.findIndex((subject) => subject.id === id);
	//         let [ removedItem ] = student.subjects.splice(index, 1);

	//         console.log('Se removió ' + removedItem.name);
	//         console.table(student.subjects);
	//         return student;
	//     });
	// }
}

export { Student };
