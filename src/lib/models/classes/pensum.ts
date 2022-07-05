/* eslint-disable space-in-parens */
/* eslint-disable align-import/align-import */
import { PensumSubject } from './pensum-subject';
import type { PensumProps }  from '../constructors/pensum-props';
import type { PensumContract }     from '../contracts/pensum';

class Pensum implements PensumContract {
	public id                  : string;
	public university          : string;
	public career              : string;
	public collaborators       : string[];
	public createdAt           : Date;
	public lastTimeModified    : Date;
	public usedBy              : string[];
	public subjects            : PensumSubject[];
	public subjectLength       : number;
	public cyclesByDefault     : number;
	public maxUMG              : number;

	constructor({
		id               = '',
		university       = '',
		career           = '',
		collaborators    = [],
		createdAt        = new Date(),
		lastTimeModified = new Date(),
		usedBy           = [],
		subjects         = [],
		subjectLength    = 0,
		cyclesByDefault  = 0,
		maxUMG           = 0,
	}: PensumProps) {
		this.id               = id;
		this.university       = university;
		this.career           = career;
		this.collaborators    = collaborators;
		this.createdAt        = createdAt;
		this.lastTimeModified = lastTimeModified;
		this.usedBy           = usedBy;
		this.subjects         = subjects.map((subject) => new PensumSubject(subject));
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

	findSubject( subjectCode: string ) {
		return this.subjects.find((subject) => subject.code === subjectCode);
	}

	addEnrollment( subjectCode: string ) {
		const subject = this.findSubject(subjectCode);
		if (subject) {
			subject.enrollments += 1;
		}
	}

	removeEnrollment( subjectCode: string ) {
		const subject = this.findSubject(subjectCode);
		if (subject) {
			subject.enrollments -= 1;
		}
	}
}

export { Pensum };
