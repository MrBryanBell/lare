<script>
    import MetricCard from "./Metric_Card.svelte";   
    import Medal from "./Medal.svelte";
    import { cumAcumulado, cumEgresado } from '../stores/materia_store';
    import { isAdderActive } from "../stores/session_store";


</script>




<section
    style:opacity={($isAdderActive) ? 0.5 : 1}
    >
    <MetricCard isPrimary={false} data={$cumAcumulado}/>
    <MetricCard data={$cumEgresado}/>
    <Medal />
</section>




<style lang="scss">
        section {
        grid-area: metrics;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 136px 244px auto;
        gap: 16px;
        transition: all 4s cubic-bezier(0.16, 1, 0.3, 1) ;
        // align-items: flex-start;

        // outline: 1px solid red;
    }
</style>


