import { CycleInString } from '../models/enums/cycle-enums';

export function getCycleInString( cycleNumber: number ) {
	if ( cycleNumber < 1 || cycleNumber > 10 ) {
		throw new Error( 'invalid number' );
	}

	return CycleInString[cycleNumber - 1];
}
