import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { db } from "$lib/firebase/firebaseConfig";
import { PensumSubjects } from '$lib/classes/pensum_class';
import { MateriaClass } from '$lib/classes/materia_class';
import { listOfSubjects } from '$lib/stores/listOfSubjects';



async function getData(collectionID, documentID) {
    try {
        const docRef = doc(db, collectionID, documentID);
        const docSnap = await getDoc(docRef);
        const subjectsFromDB = docSnap.data().materias;

        const pensumParsed = await getPensum(docSnap.data().pensum);
        listOfSubjects.set(pensumParsed);

        const subjectsParsed = parseSubjects(subjectsFromDB, pensumParsed);

        return { subjectsParsed };
    } 

    catch (error) {
        console.log('No se encontró la data');
    }
        
}



async function getPensum(pensumRef) {
    try {
        const request = await getDoc(pensumRef);
        const pensumFromDB = request.data().pensum;
        const parsedPensum = parsePensum(pensumFromDB);

        return parsedPensum;
    } 

    catch (error) {
        console.log('No se encontró el pensum');
    }
}



function parsePensum(PensumFromDB) {
    const parsedPensum = PensumFromDB.map(sub => new PensumSubjects(sub));
    return parsedPensum;
}




// TODO: REFACTORIZAR ESTA FUNCIÓN

function parseSubjects(subjectsFromDB, pensumFromDB) {

    let dataCombined = subjectsFromDB.map((data) => {
        
        const currentSubject = pensumFromDB.find((sub) => sub.code == data.code);
        const totalData = {...data, ...currentSubject};
        listOfSubjects.updateAdditions(currentSubject.code, 1);
        
        return totalData;
    })

    const parsedSubjects = dataCombined.map(sub => new MateriaClass(sub));

    return parsedSubjects;
}



export { getData };
