<script>
    import Indexer from "./Indexer.svelte";
    import SubjectMap from "./SubjectMap.svelte";
    import { fly } from "svelte/transition";
    import { quartInOut } from 'svelte/easing'

    let indexer;

    let outAn = { 
        x: 480, 
        duration: 400, 
        opacity: 0.5, 
        easing: quartInOut // backInOut
    }

    let inAn = { 
        x: 480, 
        duration: 400, 
        opacity: 0.5,
        easing: quartInOut
    };


</script>


<div 
    out:fly={outAn} 
    in:fly={inAn}
    on:introend="{() => indexer.focus()}"

    >
        <SubjectMap />
        <Indexer bind:this={indexer}/>
</div>





<style lang="scss" >
    div {
        background: linear-gradient(180deg, #1B7EFD 0%, #2163F1 51.04%, #1B7EFD 100%);
        padding: 40px 24px 48px;
        padding-right: 96px;
        height: 100vh;

        position: fixed;
        top: 0;
        right: 0;

        transform: translateX(72px);
    }

</style>
