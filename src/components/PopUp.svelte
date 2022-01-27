<script>
    import { cicloActual } from '../stores/cycle_store';
    import { listOfSubjects } from '../stores/listOfSubjects';
    import { db } from '../firebase/firebaseConfig';
    import { updateDoc, doc, arrayUnion } from 'firebase/firestore';

    let data = {
        code: '',
        nota: '',
    };

    $: materiaActual = listOfSubjects[listOfSubjects.findIndex((mt) => data.code === mt.code)];

    $: console.log(materiaActual);
    $: console.log($cicloActual);
    
    function addNewMateria() {
        let newMateria = {
            ciclo: $cicloActual,
            id: self.crypto.randomUUID(),
            ...materiaActual,
            ...data,
        }

        newMateria.uv = Number(newMateria.uv);

        console.log(newMateria);

        const docRef = doc(db, 'lareData', 'bryanbell');
        updateDoc(docRef, {
            ciclo1: arrayUnion(newMateria),
        })
        .then(() => {
            console.log('Se añadió con éxito');
        })

    };
</script>

<!-- markup (zero or more items) goes here -->
<div class="overlay">
    <div class="main-container" >

        <section>
            <label>Código</label>
            <input type="text" bind:value={data.code} >
        </section>

        <section>
            <label>Nota</label>
            <input type="number" bind:value={data.nota} >
        </section>

        <button on:click={addNewMateria} >SEND DATA</button>
    </div>
</div>


<style lang="scss" >
    /* your styles go here */
    @import '../styles/popUp.scss';
</style>
