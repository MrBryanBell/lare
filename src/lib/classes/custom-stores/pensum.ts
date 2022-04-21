import { writable, get, derived } from 'svelte/store';
import type Pensum from '../pensum';

class Wr_Pensum {

    public set;
	public update;
    public subscribe;

    constructor(init: Pensum) {
		let { subscribe, set, update } = writable(init);
		this.subscribe = subscribe;
		this.set = set;
		this.update = update;
	}

    
    get subjects() {
        let subs = derived(this, ($this) => ($this as Pensum).subjects);
		return subs;
    }

    
    updateSubjectAdditions(pensumOrder: number, value: number) {
        this.update((store: Pensum) => {
            let currentSubject = store.subjects[pensumOrder - 1];
            currentSubject.additions += value;

            return store;
        })
    }
}


export default Wr_Pensum;