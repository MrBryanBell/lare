<script lang="ts">
    import { cicloActual } from '$lib/stores/cycle_store';
    import pensum from '../stores/pensum-store';
    import student from '../stores/student-store'
    import { db } from '$lib/firebase/config/firebaseConfig';
    import { updateDoc, doc, arrayUnion } from 'firebase/firestore/lite';
    import { userUID, isPopUpActive } from '$lib/stores/session-store';
    import StudentSubject from '$lib/classes/subject/student-subject';
    import type SubjectStudent from '../models/constructors/subject/subject-student'

    let data = {
        code: '',
        grade: '',
    };
    
    
    let STUDENT_SUBJECTS = student.subjects; 
    let PENSUM_SUBJECTS = pensum.subjects; 


    $: materiaActual = $PENSUM_SUBJECTS[$PENSUM_SUBJECTS.findIndex((mt) => data.code === mt.code)];

    $: console.log(materiaActual);
    $: console.log($cicloActual);
    
    function addNewMateria() {
        let newMateria: SubjectStudent  = {
            id: self.crypto.randomUUID(),
            name: materiaActual.name,
            code: data.code,
            uv: materiaActual.uv,
            pensumOrder: materiaActual.pensumOrder,
            isOptative: materiaActual.isOptative,
            grade: ((+ data.grade) as number),
            cycle: $cicloActual,
        }

        console.log(newMateria);

        const docRef = doc(db, 'lareData', `${$userUID}`);
        updateDoc(docRef, {
            materias: arrayUnion(newMateria),
        })
        .then(() => {
            console.log('Se añadió con éxito');
            const newSubject: StudentSubject  = new StudentSubject({...newMateria})

            //UPDATE LOCAL LIST OF SUBJECTS
            pensum.updateSubjectAdditions(newSubject.pensumOrder, 1);

            console.table($PENSUM_SUBJECTS)
            console.log(newSubject);

            //UPDATE STORED MATERIAS 
            student.addSubject(newSubject);
            console.log('Se agregó al array');
            console.table($STUDENT_SUBJECTS);
            $isPopUpActive = false;
        })
    };

    function goOut(e) {
        if (e.key === 'Escape'){
            $isPopUpActive = false;
        }
    };
</script>



<!-- markup (zero or more items) goes here -->

<svelte:window on:keydown={(e) => goOut(e) }/>
<div class="overlay" >
    <div class="main-container" >

        <section>
            <label>Código</label>
            <input type="text" bind:value={data.code} >
        </section>

        <section>
            <label>Nota</label>
            <input type="number" bind:value={data.grade} >
        </section>

        <button on:click={addNewMateria} >SEND DATA</button>
    </div>
</div>


<style lang="scss" >
    /* your styles go here */
    @import '../styles/popUp.scss';
</style>
