<script>
    import { cicloActual } from '$lib/stores/cycle_store';
    import { listOfSubjects } from '$lib/stores/listOfSubjects';
    import { db } from '$lib/firebase/firebaseConfig';
    import { updateDoc, doc, arrayUnion } from 'firebase/firestore';
    import { userUID, isPopUpActive } from '$lib/stores/session_store';
    import { materias } from '$lib/stores/materia_store';
    import { MateriaClass } from '$lib/classes/materia_class';

    let data = {
        code: '',
        grade: '',
    };

    $: materiaActual = $listOfSubjects[$listOfSubjects.findIndex((mt) => data.code === mt.code)];

    $: console.log(materiaActual);
    $: console.log($cicloActual);
    
    function addNewMateria() {
        let newMateria = {
            cycle: $cicloActual,
            id: self.crypto.randomUUID(),
            ...data,
        }

        console.log(newMateria);

        const docRef = doc(db, 'lareData', `${$userUID}`);
        updateDoc(docRef, {
            materias: arrayUnion(newMateria),
        })
        .then(() => {
            console.log('Se añadió con éxito');
            const newSubject = new MateriaClass({...newMateria, ...materiaActual})
            
            //UPDATE LOCAL LIST OF SUBJECTS
            listOfSubjects.updateAdditions(newSubject.code, 1);

            console.table($listOfSubjects)
            console.log(newSubject);

            //UPDATE STORED MATERIAS 
            $materias = [...$materias, newSubject];
            console.log('Se agregó al array');
            console.table($materias);
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
