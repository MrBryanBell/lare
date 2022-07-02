/* eslint-disable */
import { onAuthStateChanged, getRedirectResult, getAdditionalUserInfo } from 'firebase/auth';
import { writable, type Writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { auth } from '../firebase/config/firebase-config';
import { getStudentData } from './initial-request';

type UserUID = Writable<null | string | undefined>;

const userUID: UserUID = writable(null);
const isAdderActive = writable(false);
const indexerText = writable('');
const isPopUpActive = writable(false);
const currentTab = writable(1);

onAuthStateChanged(auth, async (user) => {
	if (user) {
		userUID.set(user.uid);

		// en caso que acaba de iniciar sesión
		const result = await getRedirectResult(auth);
		if (result) {
			const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
			(isNewUser) ? goto('/config') : getStudentData('officialDataTest2');
		}

		// en caso que ya había iniciado sesión y solo refrescó la página
		if (!result) {
			await getStudentData('officialDataTest2');
		}
	}

	if (!user) {
		userUID.set(undefined);
	}
});

export {
	isAdderActive,
	isPopUpActive,
	indexerText,
	userUID,
	currentTab,
};
