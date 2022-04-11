<script>
    import { materias } from "$lib/stores/materia_store";

</script>

<div>
    {#each $materias as materia}
         <!-- content here -->
         <p>{materia.name}  --- {materia.grade.toFixed(1)}</p>
    {:else}
         <!-- empty list -->
         <p>No Data Now</p>
    {/each}
</div>

<style>
    div {
        padding-left: 150px;
    }
</style>