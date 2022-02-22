<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { barPerc } from '../stores/cycle_store';

    let localValue = tweened(0);

    onMount(() => {
        localValue.set($barPerc)
    });

    $: $barPerc, localValue.set($barPerc)
</script>



<main>
    <div>
        <section
            style:width={`${$localValue}%`}
            >
        </section>
    </div>
</main>



<style lang="scss" >

    main {
        grid-area: lineBar;

        height: 100%;
        display: flex;
        align-items: flex-start;
        z-index: 10;
    }

    div {
        width: 100%;
        height: 4px;
        background-color: #F1F3F7;
        border-radius: 4px;

        overflow: hidden;

        section {
            height: 100%;
            background: linear-gradient(90deg, #D7DCE9 0%, #BDC5DB 246.91%), #F1F3F7;;
        }
    }
    
</style>