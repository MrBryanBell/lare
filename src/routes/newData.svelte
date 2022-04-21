<script>
    import { onMount } from "svelte";
    // import { getData } from "$lib/firebase/firebaseFunctions";
    import { updateDoc, doc } from 'firebase/firestore/lite';
    import { db } from "$lib/firebase/config/firebaseConfig";
    import { userUID } from '$lib/stores/session-store';

    let materias = [];
    
    onMount(async () => {
        // materias = await getData('lareData', `${$userUID}`);
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
         <p>{item.grade}</p>
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