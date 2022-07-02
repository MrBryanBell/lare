interface PensumSubject {
	id          : string;
	name        : string;
	code        : string;
	uv          : number;
	cycleOrigin : number;
	pensumOrder : number;
	isOptative  : boolean;
	enrollments : number;
	area        : string;
}

interface Pensum {
	id               : string;
	university       : string;
	career           : string;
	collaborators    : string[];
	subjects         : PensumSubject[];
	createdAt        : Date;
	lastTimeModified : Date;
	usedBy           : string[];
	subjectLength    : number;
	cyclesByDefault  : number;
	maxUMG           : number;
}

interface StudentSubject {
	id          : string;
	name        : string;
	code        : string;
	uv          : number;
	pensumOrder : number;
	isOptative  : boolean;
	grade       : number;
	cycle       : number;
}

interface StudentDocument {
	id         : string;
	firstName  : string;
	lastName   : string;
	email      : string;
	university : string;
	career     : string;
	subjects   : StudentSubject[];
	pensum     : Pensum;
}

export type {
	StudentDocument,
};
