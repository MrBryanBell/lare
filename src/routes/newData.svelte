<script>
    import { onMount } from "svelte";
    import { getData } from "../firebase/firebaseFunctions";
    import { updateDoc, doc } from 'firebase/firestore';
    import { db } from '../firebase/firebaseConfig';
    
    let materias = [];
    
    onMount(async () => {
        materias = await getData('lareData', 'bryanbell');
    });

    $: console.log(materias);

    function addID() {
        
        materias.forEach((mat) => {
            let uuid = self.crypto.randomUUID();
            console.log(uuid);
        })

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