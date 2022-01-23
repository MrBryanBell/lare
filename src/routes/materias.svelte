<script>
    import { materias, promedio } from '../stores/materia_store.js';
    import { cicloActual } from '../stores/cycle_store';
    import Card from '../components/Card.svelte';
    import MetricCard from '../components/Metric_Card.svelte';
    import CycleBar from '../components/CycleBar.svelte';
    
    
    $: materiasAct = $materias.filter((mt) => mt.ciclo === $cicloActual);
    
    $: console.log(materiasAct);
    $: console.log($promedio);

</script>


<section>
    <MetricCard data={$promedio}/>
    <MetricCard isPrimary={false} data={$promedio}/>
</section>

<article><CycleBar /></article>
<div>
    {#each materiasAct as materia }
        <Card data={{...materia}} />
    {:else}
        <p>No hay data aún</p>
    {/each}
</div>


<style>
    div {
        padding: 24px;
        padding-left: 100px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }

    section, article {
        padding-left: 100px;
        padding-top: 24px;

        display: flex;
        gap: 16px;
    }
</style>