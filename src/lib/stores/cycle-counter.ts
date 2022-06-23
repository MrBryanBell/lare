/* eslint-disable */

import {
	writable, type Writable, type Subscriber,
} from 'svelte/store';
import { getCycleInString } from '../actions/get-cycle-in-string';
import { getCycleProgressPercentage } from '../actions/get-cycle-progress-percentage';


export class Cycle {
	private store: Writable<this>;
	public number: number;

	constructor() {
		this.number = 1;
		this.store = writable(this);
	}

	subscribe(subscriber: Subscriber<this>) {
		return this.store.subscribe(subscriber);
	}

	get inString() {
		return getCycleInString(this.number);
	}

	get progressPercentage() {
		return getCycleProgressPercentage(this.number);
	}

	goNext() {
		if (this.number < 10) {
			this.number += 1;
			this.store.set(this);
		}
	}

	goPrevious() {
		if (this.number > 1) {
			this.number -= 1;
			this.store.set(this);
		}
	}

	goTo(number: number) {
		this.number = number;
		this.store.set(this);
	}
}
