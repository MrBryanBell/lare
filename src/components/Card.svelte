<script>
    import Toggle from './Switch.svelte';
    let Switch;

    function changeNote(e){
            if ((e.shiftKey)){
                (e.deltaY < 0) ? (grade += 1) : (grade -= 1)

            } else {
                (e.deltaY < 0) ? (grade += 0.1) : (grade -= 0.1)
            }
    }


    let subject = {
        id: '04OPT1',
        name: 'Introducción a la Comunicación',
        uv: 4,
        grade: 9.6,
    }

    let {id, name, uv, grade } = subject;

    let state = false;

    function toggleState(){
        state = !state;
        Switch.toggleKnob();
    };

</script>





<div class="main-container" on:wheel|preventDefault={changeNote} >

    <!-- CABECERA: NOMBRE Y CÓDIGO MATERIA -->
    <div class="card-header" >
        <p class="subject-id">{ id }</p>
        <h4 class="subject-name" >{ name }</h4>
    </div>
    

    <!-- DATA: NOTA, UV & VERTICAL MENU -->
    <div class="card-data">

        <div class="card-data-data" >
            <!-- UV -->
            <p class="subject-uv" >0{ uv } UV</p>
            
            <!-- GRADE & CHECKMARK-ICON -->
            <div class="card-status" >
                <h4 class="subject-grade" >{ grade.toFixed(1) }</h4>
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