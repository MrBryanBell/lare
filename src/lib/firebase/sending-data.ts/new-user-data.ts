import { doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';

async function SEND_NEW_USER_DATA(USER_UID: string) {
	try {
		const colRef = doc(db, 'lareData', `${USER_UID}`);
		await setDoc(colRef, { materias: [] });
		// console.log('Se creó un array vacío en la db');
	} catch (error) {
		// console.log(error);
	}
}

export default SEND_NEW_USER_DATA;
