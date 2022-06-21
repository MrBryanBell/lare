import { PensumStore } from '../models/classes/custom-stores/pensum';
import { Pensum }      from '../models/classes/pensum';

const initConfig = new Pensum({
	id               : '',
	university       : '',
	career           : '',
	collaborators    : [],
	subjects         : [],
	createdAt        : new Date(),
	lastTimeModified : new Date(),
	usedBy           : [],
	subjectLength    : 0,
	cyclesByDefault  : 0,
	maxUMG           : 0,
});

export const pensum = new PensumStore(initConfig);
