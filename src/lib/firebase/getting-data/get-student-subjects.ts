import { getDoc, doc, DocumentReference } from "firebase/firestore/lite";
import { db } from "$lib/firebase/config/firebaseConfig";
import type SubjectStudentCSTR from "../../models/constructors/subject/subject-student";


async function getStudSubjects(COLLECTION_ID: string, DOCUMENT_ID: string) {

    const docRef = doc(db, COLLECTION_ID, DOCUMENT_ID);
    const docSnap = await getDoc(docRef);
    
    const RAW_STUDENT_SUBJECTS = <SubjectStudentCSTR[]> docSnap.data().materias;
    const PENSUM_DB_REF = <DocumentReference> docSnap.data().pensum;

    return { RAW_STUDENT_SUBJECTS, PENSUM_DB_REF };

};


export { getStudSubjects };