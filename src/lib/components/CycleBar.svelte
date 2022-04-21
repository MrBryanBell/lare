<script>
    import CycleChart from '$lib/components/CycleChart2.svelte';
    import { cicloActualEnTexto } from '$lib/stores/cycle_store';
    import { changeCycle } from '$lib/algoritmos/changeCycle';
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    

</script>



<div class="main-container" >

    <!-- CYCLE-STATE-BAR -->

    <div 
        class="cycle-state-bar" 
        on:wheel|preventDefault={(e) => changeCycle(e)}
        >
            <img class="icon" src="/icons/cloud-sync.svg" alt="">
            <p>CICLO /</p>
        
            {#key $cicloActualEnTexto}
                <h4 
                    in:fly={{ duration: 260, easing: cubicOut}}
                    >{ $cicloActualEnTexto.toUpperCase() }
                </h4>
            {/key}

            <img src="/icons/barChart.svg" alt="">
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
