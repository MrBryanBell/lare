import type { StudentSubjectProps } from './subject-props';
import type { UserProps }           from './user-props';
import type { PensumProps }         from './pensum-props';

export interface StudentProps extends UserProps {
	university : string;
	career     : string;
	subjects   : StudentSubjectProps[];
	pensum     : PensumProps
}
