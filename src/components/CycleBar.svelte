<script>
    // your script goes here
    let data = {
        carrera: 'c. de la Comunicación',
        pensum: '2018 - 2021',
        ciclo: 'octavo',
    };

    let { carrera, pensum, ciclo } = data;
</script>



<div class="main-container">

    <!-- CYCLE-STATE-BAR -->

    <div class="cycle-state-bar">
        <img class="luckImage" src="/images/graphics.png" alt="">
        <div>
            <img src="/icons/cloud-sync.svg" alt="">
            <p>CICLO /</p>
            <h4>{ ciclo.toUpperCase() }</h4>
        </div>

        <section>
            <img src="/icons/arrow-circle.svg" alt="">
            <img src="/icons/arrow-circle.svg" alt="">
        </section>
    </div>

    
    <!-- INFO-BAR -->

    <div class="cycle-info-bar">
        <p>{carrera.toUpperCase()}</p>
        <p>PENSUM {pensum}</p>
    </div>

</div>




<style lang="scss">
    @import './styles/_cycleBar.scss';
</style>
