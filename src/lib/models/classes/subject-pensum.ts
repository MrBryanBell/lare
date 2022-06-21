import { Subject }                       from './subject';
import type { SubjectPensumConstructor } from '../constructors/subject';
import type { PensumSubjectContract }    from '../contracts/subject-pensum';

class SubjectPensum extends Subject implements PensumSubjectContract {
	public cycleOrigin  : number;
	public inscriptions : number;
	public area         : string;

	constructor({
		id           = 'GTYS-DER',
		name         = 'Materia Provisional',
		code         = '03GC02',
		uv           = 4,
		pensumOrder  = 99,
		isOptative   = false,
		cycleOrigin  = 1,
		inscriptions = 0,
		area         = 'gc',
	}: SubjectPensumConstructor) {
		super({
			id, name, code, uv, pensumOrder, isOptative,
		});
		this.cycleOrigin  = cycleOrigin;
		this.inscriptions = inscriptions;
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
			inscriptions : this.inscriptions,
			area         : this.area,
		};
	}

	updateInscriptions(value: number) {
		this.inscriptions += value;
	}
}

export { SubjectPensum };
