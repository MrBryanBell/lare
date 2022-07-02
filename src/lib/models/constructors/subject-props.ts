interface SubjectProps {
	id          : string;
	name        : string;
	code        : string;
	uv          : number;
	pensumOrder : number;
	isOptative  : boolean;
}

interface StudentSubjectProps extends SubjectProps{
	grade : number;
	cycle : number;
}

interface PensumSubjectProps extends SubjectProps {
	cycleOrigin : number;
	enrollments : number;
	area        : string;
}

export type {
	SubjectProps,
	StudentSubjectProps,
	PensumSubjectProps,
};
