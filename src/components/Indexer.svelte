<script>
    import CardResult from './CardResult.svelte';
    import { listOfSubjects } from '../stores/listOfSubjects';
    import Sortable from 'sortablejs';
    import { onMount } from 'svelte';
    import { indexerText } from '../stores/session_store';

    let cardContainer, input

    onMount(() => {
        let sortList = Sortable.create(cardContainer, {
            group: {
	        	name: 'cuteList',
                pull: true,
                put: false,
	        },

            forceFallback: true,
	        easing: "cubic-bezier(1, 0, 0, 1)",
        })

    });

    export function focus() {
        input.focus();
    }


    $: results = $listOfSubjects.filter(({name}) => name.toLowerCase().startsWith($indexerText.toLocaleLowerCase()));

    // $: console.log(results);
    $: console.log('Indexer text is ' + $indexerText);

</script>

<div class="main-container" >
    
    <input 
        type="text" 
        placeholder="Escribe el nombre de una materia..." 
        bind:value={$indexerText}
        bind:this={input}
    >

    <section
        bind:this={cardContainer}
        class="cardResult-container" 
        >
        {#key $indexerText}
            {#each results as materia}
                <CardResult data={materia}/>
            {:else}
                <p>No se encontraron resultados</p>
            {/each}
        {/key }

    </section>

    <div class="overlay"></div>

</div>


<style lang="scss" >
    @import '../styles/utils/_mixins.scss';

    .main-container {
        position: relative;
    }

    input {
        border: 1px solid #88BDFB;
        background-color: transparent;
        padding: 15px 16px;
        border-radius: 4px;

        @include text-mixin('Inter', 14px, 16px, var(--inter-regular), #F5FAFF, -0.01em );

        // TODO: BORRAR
        outline: none;
        width: 100%;
        margin-bottom: 20px;

    }

    ::placeholder {
        @include text-mixin('Inter', 14px, 16px, var(--inter-regular), #F5FAFF, -0.02em );
    }

    .cardResult-container {
        width: 404px;
        height: 400px;
        overflow-y: scroll;

        background-color: #4B9EFB;
        border-radius: 8px 8px 0px 0px;
        padding: 20px 16px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 148px;
        gap: 12px;

    }

    .overlay {
        width: 100%;
        height: 86px;
        background: linear-gradient(180deg, rgba(30, 114, 248, 0) 0%, #1E74F9 100%);
        position: absolute;
        bottom: 0;
        left: 0;

        pointer-events: none;
    }

    ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #0363c3;
}
::-webkit-scrollbar-track {
  background: #9ab7d8;
  border: 0px none #ffffff;
  border-radius: 58px;
}
::-webkit-scrollbar-track:hover {
  background: #9ab7d8;
}
::-webkit-scrollbar-track:active {
  background: #9ab7d8;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>


