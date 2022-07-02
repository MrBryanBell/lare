/* eslint-disable */
import { writable, derived } from 'svelte/store';
import type { Student } from '../student';

export class StudenStore {
	public subscribe;
	public update;
	public set;

	constructor(init: Student) {
		const { subscribe, set, update } = writable(init);
		this.subscribe = subscribe;
		this.update = update;
		this.set = set;
	}

	get subjects$() {
		return derived(this, ($this) => $this.subjects);
	}

	get totalUmg$() {
		return derived(this, ($this) => $this.totalUmg);
	}

	get totalUv$() {
		return derived(this, ($this) => $this.totalUv);
	}

	get cumAcumulado$() {
		return derived(this, ($this) => $this.cumAcumulado);
	}

	get cumEgresado$() {
		return derived(this, ($this) => $this.cumEgresado);
	}

	shiftGrade(subjectId: string, value: number) {
		this.update((student) => student.shiftGrade(subjectId, value));
	}
}
