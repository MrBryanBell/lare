import { Student } from '../models/classes/student';

const studentMock = new Student({
	id         : 'officialDataTest2',
	firstName  : 'Juan',
	lastName   : 'Perez',
	email      : 'bryanbellabc@gmail.com',
	university : 'UJMD',
	career     : 'Ingenieria en Sistemas',
	subjects   : [],
	pensum     : {
		id               : 'officialPensum',
		career           : 'Ingenieria en Sistemas',
		university       : 'UJMD',
		collaborators    : [],
		createdAt        : new Date(),
		lastTimeModified : new Date(),
		usedBy           : [],
		subjects         : [],
		subjectLength    : 0,
		cyclesByDefault  : 0,
		maxUMG           : 0,
	},
});

export {
	studentMock,
};
