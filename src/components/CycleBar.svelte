<script>
    import CycleChart from './cycleChart.svelte';
    import { cicloActualEnTexto } from '../stores/cycle_store';
    import { changeCycle } from '../algoritmos/changeCycle';

</script>



<div class="main-container">

    <!-- CYCLE-STATE-BAR -->

    <div class="cycle-state-bar" 
        on:wheel|preventDefault={(e) => changeCycle(e)}
        >
            <img class="icon" src="/icons/cloud-sync.svg" alt="">
            <p>CICLO /</p>
            <h4>{ $cicloActualEnTexto.toUpperCase() }</h4>
    </div>

    <section class="buttons-container">
        <img 
            src="/icons/arrow-circle.svg" 
            alt="" 
            on:click={(e) => changeCycle(e, -1)} 
            >
        <img 
            src="/icons/arrow-circle.svg" 
            alt="" 
            on:click={(e) => changeCycle(e, 1)} 
            >
    </section>

    <CycleChart />

    <img class="luckImage" src="/images/embud.png" alt="">

</div>




<style lang="scss">
    @import '../styles/_cycleBar.scss';
</style>
