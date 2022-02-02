<script>
    // your script goes here
    import { cicloActualEnTexto } from '../stores/cycle_store';
    import { changeCycle } from '../algoritmos/changeCycle';


    let data = {
        carrera: 'c. de la Comunicación',
        pensum: '2018 - 2021',
    };

    let { carrera, pensum } = data;

</script>



<div class="main-container">

    <!-- CYCLE-STATE-BAR -->

    <div 
        class="cycle-state-bar" 
        on:wheel|preventDefault={(e) => changeCycle(e)}
        >
        <img class="luckImage" src="/images/embud.png" alt="">
        <div>
            <img src="/icons/cloud-sync.svg" alt="">
            <p>CICLO /</p>
            <h4>{ $cicloActualEnTexto.toUpperCase() }</h4>
        </div>

        <section>
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
    </div>

    
    <!-- INFO-BAR -->

    <div class="cycle-info-bar">
        <p>{carrera.toUpperCase()}</p>
        <p>PENSUM {pensum}</p>
    </div>

</div>




<style lang="scss">
    @import '../styles/_cycleBar.scss';
</style>
