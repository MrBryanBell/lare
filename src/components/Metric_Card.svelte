<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { isFirstTimeRendered } from '../stores/session_store';

	export let isPrimary = true;

    $: text = isPrimary ? 'Egresado' : 'Acumulado';
	$: textColor = isPrimary ? '#F5FAFF' : '#F5FAFF';
    $: smallTextColor = isPrimary ? '#9ACFFE' : '#C2E2FF';

	export let data;
    const localValue = tweened(0);

    $: data, localValue.set(data);

    onMount(() => {
        localValue.set(0);
    });
</script>




<div
	class="main-container"
	class:light-theme={!isPrimary}
	class:default-theme={isPrimary}
>
	<p style:color={textColor} >CUM {text}</p>
	<div>
		<p style:color={smallTextColor} >+03</p>
        {#if isPrimary}
		    <img src="/icons/up-arrow-defaultTheme.svg" alt="" />
        {:else}
		    <img src="/icons/up-arrow-lightTheme.svg" alt="" />
        {/if}
	</div>
	<h4 style:color={textColor} >{$localValue.toFixed(3)}</h4>
	{#if isPrimary}
		<img class="info-icon" src="/icons/info-metric-default.svg" alt="" />
        <img class="info-image" src="/images/default-image.png" alt="" />
    {:else}
        <img class="info-icon" src="/icons/info-metric-light.svg" alt="" />
		<img class="info-image" src="/images/light-image.png" alt="" />
	{/if}
</div>





<style lang="scss">
	@import '../styles/_metricCard.scss';
</style>
