import { writable, get, derived }                 from 'svelte/store';
import type { Pensum }                            from '../pensum';
import type { IPensumStore }                      from '../../contracts/custom-store';
import type { Pensum as PensumFieldInStudentDoc } from '$lib/models/firestore/students-collection/pensum-field';

export class PensumStore implements IPensumStore {
	public subscribe;
	public update;
	public set;

	constructor(pensum: Pensum) {
		const { subscribe, set, update } = writable(pensum);
		this.subscribe                   = subscribe;
		this.set                         = set;
		this.update                      = update;
	}

	get subjects$() {
		const subs = derived(this, ($this: Pensum) => $this.subjects);
		return subs;
	}

	toFirestoreObject(): PensumFieldInStudentDoc {
		return get(this).toFirestoreObject();
	}

	updateSubjectInscriptions(subjectCode: string, value: number) {
		this.update((store: Pensum) => {
			// eslint-disable-next-line no-shadow
			const subject = store.subjects.find((subject) => subject.code === subjectCode);
			// eslint-disable-next-line no-unused-expressions
			subject && subject.updateInscriptions(value);
			return store;
		});
	}
}
