import type Pensum from "../classes/pensum";
import type { Unsubscriber, Subscriber, Updater } from "svelte/store";

type Invalidator<T> = (value?: T) => void;

interface WP {

    subscribe: (
        this: void, 
        run: Subscriber<Pensum>, 
        invalidate?: Invalidator<Pensum>
    ) => Unsubscriber;

    set: (
        this: void, 
        value: Pensum
    ) => void;

    update: (
        this: void, 
        updater: Updater<Pensum>
    ) => void;

    updateSubjectAdditions: (
        pensumOrder: number, 
        value: number
    ) => void;
    
}


export default WP;