<script>
    import CycleHeader from "$lib/components/cycle-bar/CycleBar.svelte";
    import SubjectContainer from "$lib/components/SubjectContainer.svelte";
</script>




<div>
    <CycleHeader />
    <SubjectContainer /> 

    <!-- <button
        on:click={() => $isPopUpActive = true}
        >Añadir Materia
    </button> -->
</div>



<style lang="scss" >
  div{
    margin-bottom: 100px;
    grid-area: materias;
  }
</style>