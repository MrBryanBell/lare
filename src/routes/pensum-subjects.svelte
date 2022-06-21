<script>
    import { pensum } from "../lib/stores/pensum-store";
    
    let subjects = pensum.subjects$;
    
</script>

<div>
    {#each $subjects as materia}
         <p>{materia.name}  --- {materia.code}</p>
    {:else}
         <p>No Data Now</p>
    {/each}
</div>

<style>
    div {
        padding-left: 150px;
    }
</style>