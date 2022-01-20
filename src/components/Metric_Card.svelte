<script>
	// your script goes here
	let data = {
		cum: 8.642,
	};

	let { cum } = data;

	export let isPrimary = true;

	$: textColor = isPrimary ? '#D7ECFF' : '#F5FAFF';
    $: smallTextColor = isPrimary ? '#9ACFFE' : '#C2E2FF';
</script>




<div
	class="main-container"
	class:light-theme={!isPrimary}
	class:default-theme={isPrimary}
>
	<p style:color={textColor} >CUM Egresado</p>
	<div>
		<p style:color={smallTextColor} >+03</p>
        {#if isPrimary}
		    <img src="/icons/up-arrow-defaultTheme.svg" alt="" />
        {:else}
		    <img src="/icons/up-arrow-lightTheme.svg" alt="" />
        {/if}
	</div>
	<h4 style:color={textColor} >{cum}</h4>
	{#if isPrimary}
		<img class="info-icon" src="/icons/info-metric-default.svg" alt="" />
	{:else}
		<img class="info-icon" src="/icons/info-metric-light.svg" alt="" />
	{/if}
</div>





<style lang="scss">
	@import '../styles/_metricCard.scss';
</style>
