<script>
    import { isPopUpActive } from '../stores/session_store';
    import { isAdderActive } from "../stores/session_store"; 
    
    import AssistantBar from "../components/Assistant_Bar.svelte";
    import NoteBook from "../components/NoteBook.svelte"
    import SideBar from "../components/SideBar.svelte";
    import PopUp from "../components/PopUp.svelte";
    import Adder from "../components/Adder.svelte";

    let mostrarTecla = (e) => {
        let target = e.target.nodeName;
        
        if(e.which === 81 && target !== 'INPUT') {
            $isAdderActive = !$isAdderActive;
        }
    };

</script>

<svelte:window on:keydown={mostrarTecla}/>
<main>
    <AssistantBar />
    <NoteBook />
    <SideBar />
</main>



{#if $isPopUpActive }
    <PopUp />
{/if}

{#if $isAdderActive }
    <Adder/>
{/if}

<style lang="scss">
    main {
        padding-left: 110px;
        padding-right: 48px;
        padding-top: 28px;
        min-height: 100vh;
        background: #EDF1F3;
        // background: linear-gradient(228.58deg, #E3EBFC 0%, #FFFFFF 62.57%);

        display: grid;
        grid-template-columns: minmax(460px, 900px) minmax(360px, 500px);
        grid-template-rows: 64px auto;
        grid-template-areas: 
            "toolbar toolbar"
            "materias metrics"
        ;

        row-gap: 48px;
        column-gap: 80px;
        // outline: 1px solid red;
    }

</style>