<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { barPerc } from '$lib/stores/cycle_store';
    import { cubicOut } from 'svelte/easing';

    let localValue = tweened(0, {
        duration: 400,
        easing: cubicOut,
    });

    onMount(() => {
        localValue.set($barPerc)
    });

    $: $barPerc, localValue.set($barPerc)
</script>




    <div>
        <section
            style:width={`${$localValue}%`}
            >
        </section>
    </div>




<style lang="scss" >



    div {
        width: 100%;
        height: 3px;
        // background-color: #F1F3F7;
        border-radius: 4px;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;


        overflow: hidden;

        section {
            height: 100%;
            background: linear-gradient(90.28deg, rgba(176, 203, 252, 0.6) 0.25%, rgba(108, 201, 255, 0.6) 47.16%, rgba(62, 117, 241, 0.8) 98.16%);
        }
    }
    
</style>