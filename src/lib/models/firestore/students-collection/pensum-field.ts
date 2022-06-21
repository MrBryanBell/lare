interface PensumSubject {
	id           : string;
	name         : string;
	code         : string;
	uv           : number;
	cycleOrigin  : number;
	pensumOrder  : number;
	isOptative   : boolean;
	inscriptions : number;
	area         : string;
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

export type { Pensum, PensumSubject };
