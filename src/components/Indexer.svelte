<script>
    import CardResult from './CardResult.svelte';
    import { listOfSubjects } from '../stores/listOfSubjects';
    let text = "";

    $: results = listOfSubjects.filter(({name}) => name.toLowerCase().startsWith(text));

    // $: console.log(results);

</script>

<div>
    
    <input 
        type="text" 
        placeholder="Escribe el nombre de una materia..." 
        bind:value={text} 
    >

    <section class="cardResult-container" >
        {#each results as materia}
            <CardResult data={materia}/>
        {:else}
            <p>No se encontraron resultados</p>
        {/each}
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
        overflow: hidden;

        background-color: #4B9EFB;
        border-radius: 8px;
        padding: 20px 16px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 148px;
        gap: 16px;

    }


</style>


