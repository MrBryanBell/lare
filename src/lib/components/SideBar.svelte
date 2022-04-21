<script lang="ts">
    import MetricCard from "$lib/components/Metric_Card.svelte";
    import Medal from "$lib/components/Medal.svelte";
    import student from '../stores/student-store';
    import { isAdderActive } from "$lib/stores/session-store";


    $: CUM_ACUMULADO = $student.CUM_ACUMULADO;
    $: CUM_EGRESADO = $student.CUM_EGRESADO;

</script>




<section
    style:opacity={($isAdderActive) ? 0.5 : 1}
    >
    <MetricCard isPrimary={false} data={CUM_ACUMULADO}/>
    <MetricCard data={CUM_EGRESADO}/>
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


