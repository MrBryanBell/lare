import type { Unsubscriber, Subscriber } from 'svelte/store';
import type StudentSubject from '../classes/subject/student-subject';


interface WSS {
	subscribe: (
		this: void,
		run: Subscriber<StudentSubject[]>,
		invalidate?
	) => Unsubscriber;

	set: (
        this: void, 
        value: StudentSubject[]
    ) => void;

	update: (
        this: void, 
        updater
    ) => void;
}


export default WSS;