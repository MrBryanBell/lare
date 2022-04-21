<script lang="ts">
    import Toggle from '$lib/components/Switch.svelte';
    import { changeNote } from '$lib/algoritmos/changeNote';
    import { fly } from 'svelte/transition';
    import { showContextMenu } from '$lib/actions/cardContextMenu';
    import type SubjectStudent from '../models/constructors/subject/subject-student'
    
    let Switch: Toggle;

    export let index: number;
    let state = false;


    export let data: SubjectStudent = {
        id: 'b92ba872-b74d-447b-b33d-970d3b2dc8ef',
        name: 'Introducción a la Comunicación',
        uv: 4,
        code: 'COM',
        grade: 9.6,
        cycle: 1,
        pensumOrder: 1,
        isOptative: false,
    }


    function toggleState(){
        state = !state;
        Switch.toggleKnob();
    };

</script>





<div
    in:fly={ { y: -20, duration: 300, delay: ++index * 50 }}
    class="main-container" 
    on:wheel|preventDefault={(e) => changeNote(e, data.id)} >

    <!-- CABECERA: NOMBRE Y CÓDIGO MATERIA -->
    <h4 class="subject-name" >{ data.name }</h4>
    

    <!-- DATA: NOTA, UV & VERTICAL MENU -->
    <div class="card-data">

        <div class="card-data-data" >
            <!-- UV -->
            <p class="subject-uv" >0{ data.uv } uv</p>
            
            <!-- GRADE & CHECKMARK-ICON -->
            <div class="card-status" >
                <h4 class="subject-grade" >{ data.grade.toFixed(1) }</h4>
                <img src="/icons/checkmark.svg" alt="">
            </div>
        </div>
        
        <!-- VERTICAL-MENU-ICON -->
        <span>   
                <button
                    class="options-menu" 
                    use:showContextMenu={ {id: data.id, pensumOrder: data.pensumOrder} }
                    >
                    <img
                    src="/icons/options-menu.svg" 
                    alt=""
                    
                    >
                </button>
        </span>
    </div>
    
    
    <!-- CARD FOOTER: INFO-ICON & TOGGLE -->
    <div class="card-footer">
        <img src="/icons/card-infoIcon.svg" alt="">
        <Toggle 
            bind:this={Switch} 
            on:click={toggleState}
        />
    </div>

</div>





<style lang="scss">
    
    @import '../styles/_card.scss';
    
    button {
        border: none;
        background-color: transparent;
        position: relative;

        //outline: 1px solid red;
        height: 28px;
    }

    :global(.card-overlay) {
        position: absolute;
        background: hsla(214, 95%, 68%, 1);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.3;
	    border-radius: 0.5rem;
        pointer-events: none;
    }
</style>