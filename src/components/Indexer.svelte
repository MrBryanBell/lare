<script>
    import CardResult from './CardResult.svelte';
    import { listOfSubjects } from '../stores/listOfSubjects';
    import Sortable from 'sortablejs';
    import { onMount } from 'svelte';

    let cardContainer;

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

    let text = "";

    $: results = $listOfSubjects.filter(({name}) => name.toLowerCase().startsWith(text));

    $: console.log(results);

</script>

<div>
    
    <input 
        type="text" 
        placeholder="Escribe el nombre de una materia..." 
        bind:value={text} 
    >

    <section
        bind:this={cardContainer}
        class="cardResult-container" 
        >
        {#key text}
            {#each results as materia}
                <CardResult data={materia}/>
            {:else}
                <p>No se encontraron resultados</p>
            {/each}
        {/key }
    </section>
</div>


<style lang="scss" >
    @import '../styles/utils/_mixins.scss';


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
        width: 432px;
        height: 400px;
        overflow-y: scroll;

        background-color: #4B9EFB;
        border-radius: 8px;
        padding: 20px 16px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 148px;
        gap: 16px;

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
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 58px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>


