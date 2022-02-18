import { get, writable } from 'svelte/store';
import { auth } from '../firebase/firebaseConfig';
import {
    GoogleAuthProvider,
    getRedirectResult,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { getDoc, doc, collection, addDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { bindData } from './materia_store';



let userUID = writable(null);
let currentTab = writable(1);
let isPopUpActive = writable(false);


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        userUID.set(uid);
        const docRef = doc(db, 'lareData', `${uid}`);
        const docSnap = await getDoc(docRef);

        // USUARIO VIEJO
        if (docSnap.exists()) {
            // LLAMAR A FUNCIÓN PARA OBTENER DATA
            await bindData(uid);
            console.log('Listo');
        } 
        
        // USUARIO NUEVO
        else {
            // SETEAR ARRAY DE MATERIAS LOCAL CON UN ARRAY VACÍO
            // CREAR DOC EN FIREBASE Y SETEARLO CON ARRAY VACÍO
            const colRef = doc(db, 'lareData', `${uid}`);
            await setDoc(colRef, {materias: []})
            .then(() => console.log('Se creó un array vacío en la db'))
        }

    } else {
        console.log('Usuario no ha inciado sesión');
        userUID.set(undefined);
    }
});


export { userUID, currentTab, isPopUpActive };
