interface SubjectConstructor {
	id          : string;
	name        : string;
	code        : string;
	uv          : number;
	pensumOrder : number;
	isOptative  : boolean;
}

interface SubjectStudentConstructor extends SubjectConstructor {
	grade : number;
	cycle : number;
}

interface SubjectPensumConstructor extends SubjectConstructor {
	cycleOrigin  : number;
	inscriptions : number;
	area         : string;
}

export type { SubjectConstructor, SubjectStudentConstructor, SubjectPensumConstructor };
