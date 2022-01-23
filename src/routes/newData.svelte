<script>
    import { onMount } from "svelte";
    import { getData } from "../firebase/firebaseFunctions";
    import { v4 } from 'uuid';
    import { updateDoc, doc } from 'firebase/firestore';
    import { db } from '../firebase/firebaseConfig';
    
    let materias = [];
    
    onMount(async () => {
        materias = await getData('lareData', 'bryanbell');
    });

    $: console.log(materias);

    function addID() {
        
        materias.forEach((mat) => {
            let newID = v4();
            mat.id = newID;
        })

        const docRef = doc(db, 'lareData', 'bryanbell');
        updateDoc(docRef, {
            ciclo1: [...materias]
        })
        .then(() => console.log('se completó con éxito'))
    };

</script>

<div>
    {#each materias as item}
         <!-- content here -->
         <p>{item.nota}</p>
    {:else}
         <!-- empty list -->
    {/each}

    <button on:click={addID} >Enviar</button>
</div>



<style>
    /* your styles go here */
    div {
        padding-left: 100px;
    }
</style>