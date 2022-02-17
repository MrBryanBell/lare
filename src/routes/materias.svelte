<script>
    import { materias, promedio } from '../stores/materia_store.js';
    import { cicloActual } from '../stores/cycle_store';
    import { isPopUpActive } from '../stores/session_store';
    
    import Sortable from 'sortablejs';

    import Card from '../components/Card.svelte';
    import MetricCard from '../components/Metric_Card.svelte';
    import CycleBar from '../components/CycleBar.svelte';
    import AssistantBar from "../components/Assistant_Bar.svelte";
    import MetricContainer from "../components/MetricContainer.svelte";
    import CircularChart from "../components/Circular_Chart.svelte";
    import PopUp from "../components/PopUp.svelte";

    import { onMount } from 'svelte';


    $: materiasAct = $materias.filter((mt) => mt.cycle === $cicloActual);
    
    let domElement;

    onMount(() => {
        let sortList = Sortable.create(domElement, {
	        group: {
	        	name: 'cuteList',
	        },

            dragClass: "sortdrag",
            ghostClass: "sortable-ghost",
            forceFallback: true,
            
	        easing: "cubic-bezier(1, 0, 0, 1)",

        });
    })


    $: console.log(materiasAct);
    $: console.log($promedio);
    $: console.log(domElement);

</script>


{#if $isPopUpActive }
<!-- content here -->
<PopUp />
{/if}

<main>

    <AssistantBar />
    <section>
        <MetricCard isPrimary={false} data={$promedio}/>
        <MetricCard data={$promedio}/>
        <MetricContainer>
            <CircularChart />
        </MetricContainer>
    </section>

    <div>
        <CycleBar />
        <article bind:this={domElement} >
            {#each materiasAct as materia }
                <Card data={{...materia}} />
            {:else}
                <p>No hay data aún</p>
            {/each}
        </article>
        <button
            on:click={() => $isPopUpActive = true}
            >Añadir Materia
        </button>
    </div>


</main>


<style lang="scss">
    div{
        margin-bottom: 100px;
        grid-area: materias;
        
        // outline: 1px solid red;

    }

    section {
        grid-area: metrics;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 136px auto;
        gap: 16px;
        // align-items: flex-start;



        // outline: 1px solid red;
    }

    article {
        margin-top: 20px;
        min-height: 476px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-auto-rows: 230px;
        gap: 1rem;
        // outline: 1px solid red;
    }
    main {
        padding-left: 140px;
        padding-right: 54px;
        padding-top: 32px;
        min-height: 100vh;
        background: linear-gradient(233.25deg, #E3EBFC 0%, #FFFFFF 48.63%);
        // background: linear-gradient(228.58deg, #E3EBFC 0%, #FFFFFF 62.57%);

        display: grid;
        grid-template-columns: minmax(460px, 900px) minmax(360px, 500px);
        grid-template-rows: auto auto;
        grid-template-areas: 
            "toolbar toolbar"
            "materias metrics"
        ;

        row-gap: 72px;
        column-gap: 92px;
        // outline: 1px solid red;
    }

</style>