import { get, writable } from 'svelte/store';

let currentTab = writable(1);

let isFirstTimeRendered = writable(true);

export { isFirstTimeRendered, currentTab };