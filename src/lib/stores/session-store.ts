import getDataFromDB from './initial-request';
import { get, writable } from 'svelte/store';
import { auth } from "$lib/firebase/config/firebaseConfig";

import { 
    onAuthStateChanged, 
    getRedirectResult, 
    getAdditionalUserInfo 
} from 'firebase/auth';

import { goto } from '$app/navigation';



onAuthStateChanged(auth, async (user) => {

    if (user) {
        const UID = user.uid;
        userUID.set(UID);

        // EN CASO QUE SE ACABA DE INICIAR SESIÓN
        const result = await getRedirectResult(auth);
        if (result) {
            const isNewUser = getAdditionalUserInfo(result).isNewUser;
            
            if (isNewUser){
                goto('/config')
            } 
            
            else {
                await getDataFromDB('yAK1rqtEwYUQy3uan1Y4iXmojh73');
            }
        }
    
        // EN CASO QUE YA HABÍA INICIADO SESIÓN Y SOLO REFRESCÓ LA PÁGINA
        else {
            await getDataFromDB('yAK1rqtEwYUQy3uan1Y4iXmojh73');
            console.log('Data Descargada')
        }
    } 
    
    else {
        console.log('Usuario no ha inciado sesión');
        userUID.set(undefined);
    }
});


let isAdderActive = writable(false);


let userUID = writable(null);
let currentTab = writable(1);
let isPopUpActive = writable(false);
let indexerText = writable("");


export { userUID, currentTab, isPopUpActive, isAdderActive, indexerText };
