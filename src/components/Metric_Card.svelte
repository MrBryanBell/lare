<script>
    import { onMount } from "svelte";
import { quintOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { fade, fly } from "svelte/transition";

	export let isPrimary = true;

    $: text = isPrimary ? 'Egresado' : 'Acumulado';
	$: textColor = isPrimary ? '#F5FAFF' : '#F5FAFF';
    $: smallTextColor = isPrimary ? '#9ACFFE' : '#C2E2FF';

	export let data;
    const localValue = tweened(0);

    $: data, localValue.set(data);

    // onMount(() => {
    //     localValue.set(0);
    // });
</script>




<div
	class="main-container"
	class:light-theme={!isPrimary}
	class:default-theme={isPrimary}
>
    <!-- TÍTULO DE LA METRIC CARD -->
	<p style:color={textColor} >Promedio {text}</p>

    <section class="data-container">

        <!-- NÚMERO PEQUEÑO -->
	    <div>
	    	<p style:color={smallTextColor} >+24</p>
            {#if isPrimary}
	    	    <img src="/icons/up-arrow-defaultTheme.svg" alt="" />
            {:else}
	    	    <img src="/icons/up-arrow-lightTheme.svg" alt="" />
            {/if}
	    </div>

        <!-- NÚMERO GRANDE (CUM) -->
        {#key $localValue}
	        <h4 
                in:fly={{y: 0, duration: 50, opacity: 0.6, easing: quintOut }}
                style:color={textColor} 
                > {$localValue.toFixed(3)}
            </h4>
        {/key}
        
    </section>
    

    <!-- ÍCONO DE INFORMACIÓN -->
	{#if isPrimary}
		<img class="info-icon" src="/icons/info-metric-default.svg" alt="" />
    {:else}
        <img class="info-icon" src="/icons/info-metric-light.svg" alt="" />
	{/if}
</div>





<style lang="scss">
	@import '../styles/_metricCard.scss';
</style>
