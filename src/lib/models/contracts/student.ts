import type { UserContract }   from './user';
import type { StudentSubject } from '../classes/student-subject';

export interface StudentContract extends UserContract {
	university        : string;
	career            : string;
	subjects          : StudentSubject[];
	totalUv           : number;
	totalUmg          : number;
	cumAcumulado      : number;
	cumEgresado       : number;
}
