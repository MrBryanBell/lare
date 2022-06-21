import { User }                               from './user';
import { SubjectStudent }                     from './subject-student';
import type { StudentContract }               from '../contracts/student';
import type { StudentConstructor }            from '../constructors/students';
import type { Student as StudentInFirestore } from '../firestore/students-collection/student-field';
import { Calculate }                          from './calculate';

class Student extends User implements StudentContract {
	public university : string;
	public career     : string;
	public subjects   : SubjectStudent[];

	constructor({
		id         = '',
		firstName  = '',
		lastName   = '',
		email      = '',
		university = '',
		career     = '',
		subjects   = [],
	}: StudentConstructor) {
		super({
			id, firstName, lastName, email,
		});
		this.university = university;
		this.career     = career;
		this.subjects   = subjects.map((subject) => new SubjectStudent(subject));
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

	toFirestoreObject(): StudentInFirestore {
		return {
			id         : this.id,
			firstName  : this.firstName,
			lastName   : this.lastName,
			email      : this.email,
			university : this.university,
			career     : this.career,
			subjects   : this.subjects.map((subject) => subject.toFirestoreObject()),
		};
	}
}

export { Student };
