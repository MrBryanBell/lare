<script>
    import { db } from '../firebase/firebaseConfig';
    import { getDoc, doc, collection, addDoc } from 'firebase/firestore';
    import { onMount } from 'svelte';
    import { getData } from '../firebase/firebaseFunctions';

    let materias = [ ];
    
    onMount(async () => {
        materias = await getData('lareData', 'bryanbell');
        console.log(materias);
    });
</script>

<h1>Lista de Materias</h1>

{#each materias as item}
     <!-- content here -->
     <p>{item.materia}</p>
     <p>{item.nota}</p>
{:else}
     <p>No hay data aún</p>
     <!-- empty list -->
{/each}
