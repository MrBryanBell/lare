import { getDoc, DocumentReference } from "firebase/firestore/lite";
import type SubjectPensumCSTR from '../../models/constructors/subject/subject-pensum';
import type PensumCSTR from '../../models/constructors/pensum';


async function getPensum(DOCUMENT_REF: DocumentReference) {
    
    const docSnap = await getDoc(DOCUMENT_REF);

    const RAW_PENSUM_DETAILS = <PensumCSTR> docSnap.data();
    // TODO: SUSTITUIR PENSUM POR SUBJECTS EN LA BASE DE DATOS
    const RAW_PENSUM_SUBJECTS = <SubjectPensumCSTR[]> docSnap.data().pensum;

    return { RAW_PENSUM_DETAILS, RAW_PENSUM_SUBJECTS };

}


export { getPensum };