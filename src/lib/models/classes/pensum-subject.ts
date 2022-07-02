import { Subject }                    from './subject';
import type { PensumSubjectProps }    from '../constructors/subject-props';
import type { PensumSubjectContract } from '../contracts/subject-pensum';

class PensumSubject extends Subject implements PensumSubjectContract {
	public cycleOrigin  : number;
	public enrollments : number;
	public area         : string;

	constructor({
		id          = 'GTYS-DER',
		name        = 'Materia Provisional',
		code        = '03GC02',
		uv          = 4,
		pensumOrder = 99,
		isOptative  = false,
		cycleOrigin = 1,
		enrollments = 0,
		area        = 'gc',
	}: PensumSubjectProps) {
		super({
			id, name, code, uv, pensumOrder, isOptative,
		});
		this.cycleOrigin  = cycleOrigin;
		this.enrollments = enrollments;
		this.area         = area;
	}

	toFirestoreObject() {
		return {
			id           : this.id,
			name         : this.name,
			code         : this.code,
			uv           : this.uv,
			cycleOrigin  : this.cycleOrigin,
			pensumOrder  : this.pensumOrder,
			isOptative   : this.isOptative,
			inscriptions : this.enrollments,
			area         : this.area,
		};
	}
}

export { PensumSubject };
