import { writable } from 'svelte/store';

let isFirstTimeRendered = writable(true);

export { isFirstTimeRendered };