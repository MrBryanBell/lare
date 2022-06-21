<script>
    import { student } from "../lib/stores/student-store";
    
    let subjects = student.subjects$;
    
</script>

<div>
    {#each $subjects as materia}
         <p>{materia.name}  --- {materia.grade.toFixed(1)}</p>
    {:else}
         <p>No Data Now</p>
    {/each}
</div>

<style>
    div {
        padding-left: 150px;
    }
</style>