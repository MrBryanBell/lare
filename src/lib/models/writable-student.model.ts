import type Student from '../classes/student';
import type { Unsubscriber, Subscriber, Updater } from "svelte/store";


interface WS {

    subscribe: (
        this: void, 
        run: Subscriber<Student>, 
        invalidate?
    ) => Unsubscriber;

    set: (
        this: void, 
        value: Student
    ) => void;

    update: (
        this: void, 
        updater: Updater<Student>
    ) => void;
    
}


export default WS;