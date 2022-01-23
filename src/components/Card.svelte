<script>
    import Toggle from './Switch.svelte';
    import { changeNote } from '../algoritmos/changeNote.js'
    
    let Switch;

    export let data = {
        id: 'b92ba872-b74d-447b-b33d-970d3b2dc8ef',
        materia: 'Introducción a la Comunicación',
        uv: 4,
        nota: 9.6,
    }

    let state = false;

    function toggleState(){
        state = !state;
        Switch.toggleKnob();
    };

</script>





<div class="main-container" on:wheel|preventDefault={(e) => changeNote(e, data.id)} >

    <!-- CABECERA: NOMBRE Y CÓDIGO MATERIA -->
    <div class="card-header" >
        <p class="subject-id">{ data.id }</p> <!-- '04OPT1' -->
        <h4 class="subject-name" >{ data.materia }</h4>
    </div>
    

    <!-- DATA: NOTA, UV & VERTICAL MENU -->
    <div class="card-data">

        <div class="card-data-data" >
            <!-- UV -->
            <p class="subject-uv" >0{ data.uv } UV</p>
            
            <!-- GRADE & CHECKMARK-ICON -->
            <div class="card-status" >
                <h4 class="subject-grade" >{ data.nota.toFixed(1) }</h4>
                <img src="/icons/checkmark.svg" alt="">
            </div>
        </div>
        
        <!-- VERTICAL-MENU-ICON -->
        <span>
            <img src="/icons/menu-vertical.svg" alt="">
        </span>
    </div>
    
    
    <!-- CARD FOOTER: INFO-ICON & TOGGLE -->
    <div class="card-footer">
        <img src="/icons/info.svg" alt="">
        <Toggle 
            bind:this={Switch} 
            on:click={toggleState}
        />
    </div>

</div>





<style lang="scss">
    
    @import '../styles/_card.scss';
</style>