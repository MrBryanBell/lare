import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function getData(collectionID, documentID) {
    const docRef = doc(db, collectionID, documentID);
    const docSnap = await getDoc(docRef);
    
    return docSnap.data().materias;
}



export { getData };
