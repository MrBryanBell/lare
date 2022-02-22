<script>
    import MetricCard from "./Metric_Card.svelte";   
    import Medal from "./Medal.svelte";
    import { promedio } from '../stores/materia_store';


</script>




<section>
    <MetricCard isPrimary={false} data={$promedio}/>
    <MetricCard data={$promedio}/>
    <Medal />
</section>




<style lang="scss">
        section {
        grid-area: metrics;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 136px 244px auto;
        gap: 16px;
        // align-items: flex-start;

        // outline: 1px solid red;
    }
</style>


