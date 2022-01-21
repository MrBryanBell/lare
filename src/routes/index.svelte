<script>
    import { db } from '../firebase/firebaseConfig';
    import { getDoc, doc } from 'firebase/firestore';
    import { onMount } from 'svelte';

    let sister = "";
    
    onMount(async () => {
        const docRef = doc(db, 'users', 'C2IDF6dahWJuBGJR5bd6');
        const docsnap = await getDoc(docRef);
        sister = docsnap.data().nombre;
    });
</script>

<h1>Welcome to my sister { sister }</h1>
<p>Queen of my Heart</p>
<a href="/materias">Materias</a>
