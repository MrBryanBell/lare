import { SubjectPensum }          from './subject-pensum';
import type { PensumConstructor } from '../constructors/pensum';
import type { PensumContract }    from '../contracts/pensum';

class Pensum implements PensumContract {
	public id                  : string;
	public university          : string;
	public career              : string;
	public collaborators       : string[];
	public subjects            : SubjectPensum[];
	public createdAt           : Date;
	public lastTimeModified    : Date;
	public usedBy              : string[];
	public subjectLength       : number;
	public cyclesByDefault     : number;
	public maxUMG              : number;

	constructor({
		id               = '',
		university       = '',
		career           = '',
		collaborators    = [],
		subjects         = [],
		createdAt        = new Date(),
		lastTimeModified = new Date(),
		usedBy           = [],
		subjectLength    = 0,
		cyclesByDefault  = 0,
		maxUMG           = 0,
	}: PensumConstructor) {
		this.id               = id;
		this.university       = university;
		this.career           = career;
		this.collaborators    = collaborators;
		this.subjects         = subjects.map((subject) => new SubjectPensum(subject));
		this.createdAt        = createdAt;
		this.lastTimeModified = lastTimeModified;
		this.usedBy           = usedBy;
		this.subjectLength    = subjectLength;
		this.cyclesByDefault  = cyclesByDefault;
		this.maxUMG           = maxUMG;
	}

	toFirestoreObject() {
		return {
			id               : this.id,
			university       : this.university,
			career           : this.career,
			collaborators    : this.collaborators,
			subjects         : this.subjects.map((subject) => subject.toFirestoreObject()),
			createdAt        : this.createdAt,
			lastTimeModified : this.lastTimeModified,
			usedBy           : this.usedBy,
			subjectLength    : this.subjectLength,
			cyclesByDefault  : this.cyclesByDefault,
			maxUMG           : this.maxUMG,
		};
	}
}

export { Pensum };
