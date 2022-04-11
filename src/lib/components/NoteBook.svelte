<script>
    import CycleBar from "./CycleBar.svelte";
    import SubjectContainer from "./SubjectContainer.svelte";
</script>




<div>
    <CycleBar />
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
        
        // outline: 1px solid red;

    }
</style>