<!-- <script lang="ts">
    import { pensum } from '../stores/pensum-store';
    import { student } from '../stores/old-student-store'
    import { db } from '../firebase/config/firebase-config';
    import { updateDoc, doc, arrayUnion } from 'firebase/firestore/lite';
    import { userUID, isPopUpActive } from '$lib/stores/session-store';
    import { SubjectStudent } from '../models/classes/student-subject';
    import type { SubjectStudentConstructor } from '../models/constructors/subject-props';
		import { cycle } from '../stores/cycle-counter-store'


    let data = {
        code: '',
        grade: '',
    };
    
    
    let STUDENT_SUBJECTS = student.subjects$;
    let PENSUM_SUBJECTS = pensum.subjects$; 


    $: materiaActual = $PENSUM_SUBJECTS[$PENSUM_SUBJECTS.findIndex((mt) => data.code === mt.code)];

    $: console.log(materiaActual);
    $: console.log($cycle.number);
    
    function addNewMateria() {
        let newMateria: SubjectStudentConstructor  = {
            id: self.crypto.randomUUID(),
            name: materiaActual.name,
            code: data.code,
            uv: materiaActual.uv,
            pensumOrder: materiaActual.pensumOrder,
            isOptative: materiaActual.isOptative,
            grade: ((+ data.grade) as number),
            cycle: $cycle.number,
        }

        console.log(newMateria);

        const docRef = doc(db, 'lareData', `${$userUID}`);
        updateDoc(docRef, {
            materias: arrayUnion(newMateria),
        })
        .then(() => {
            console.log('Se añadió con éxito');
            const newSubject: SubjectStudent  = new SubjectStudent({...newMateria})

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
</script> -->



<!-- markup (zero or more items) goes here -->

<!-- <svelte:window on:keydown={(e) => goOut(e) }/>
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
</div> -->


<!-- <style lang="scss" >
    /* your styles go here */
    @import '../styles/popUp.scss';
</style> -->
