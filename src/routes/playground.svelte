<script lang="ts">
    import { isPopUpActive } from '../lib/stores/session-store';
    import { isAdderActive } from "../lib/stores/session-store"; 
    
    import AssistantBar from "$lib/components/Assistant_Bar.svelte";
    import NoteBook from "$lib/components/NoteBook.svelte";
    import WidgetContainer from "$lib/components/WidgetContainer.svelte";
    import PopUp from "$lib/components/PopUp.svelte";
    import Adder from "$lib/components/SideBar.svelte";


    let mostrarTecla = (event: KeyboardEvent) => {
      let target = event.target.nodeName;
      
      if(event.which === 81 && target !== 'INPUT') {
          $isAdderActive = !$isAdderActive;
      }
    };

</script>

<svelte:window on:keydown={mostrarTecla}/>
<main>
    <AssistantBar />
    <NoteBook />
    <WidgetContainer />
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
        background: #E8EFF8;
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