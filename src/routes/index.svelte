<script>
    import { materias } from '../stores/materia_store.js'

</script>

<h1>Materias</h1>

{#each $materias as materia}
     <!-- content here -->
     <h4>{materia.materia}</h4>
     <p>{materia.nota}</p>
{:else}
     <!-- empty list -->
{/each}

<a href="/materias">Materias</a>
