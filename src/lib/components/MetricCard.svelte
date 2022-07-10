<script lang=ts>
	import { tweened } from "svelte/motion";
	import InfoIcon from "$lib/icons/InfoIcon.svelte";
	import TweenedNumber from "./Number/TweenedNumber.svelte";

	export let metricName = "Cum Acumulado";
	export let metricValue = 8.654;
	export let placeholderName = "REPT";
	export let placeholderValue = "02";
	export let backgroundColor = "#18191B";
	export let decimalRound = 3;
	export let hasSlot = false;

	const localValue = tweened(0);

	// every time the metricValue changes, update the localValue
	$: metricValue, localValue.set(metricValue);

</script>




<div class="metric-wrapper" style:background-color={backgroundColor}>

	<h4 class="metric-name">{metricName}</h4>
	
	<div class="metric-data">
		<section class="metric-placeholder">
			<span class="placeholder-name">{placeholderName}: </span>
			<p class="placeholder-value">{placeholderValue}</p>
			<img class="arrow-icon" src="" alt="">
		</section>

		{#if !hasSlot}
			<TweenedNumber
				fontColor="white"
				fontSize="26px"
				metricValue={metricValue}
				decimalRound={decimalRound}
			/>
		{:else}
			<slot />
		{/if}

	</div>


	<InfoIcon 
		height="24"
		position="absolute"
		fill="#ACD1F6" 
		hoverFill="#DAE0E7"
		inset="auto 8px 8px auto"
	/>

</div>






<style lang="scss">
	// * { outline: 1px solid red; }
	h4, p, span { color: white; }
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.metric-wrapper {
		padding: 16px 12px;
		border-radius: 8px;
		height: 134px;
		/* box-shadow: inset 2px 2px 8px #70aefa, inset -2px -2px 8px #2c8af7; */
		/* box-shadow: 
      inset 2px 2px 8px #4DA4F9, 
      inset -2px -2px 8px #318CF7
    ; */

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		position: relative;
	}

	.metric-data {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.metric-name {
		color: #FFFFFF;

		font-family: 'Inter';
		font-weight: var(--inter-medium);
		font-size: 13px;
		font-feature-settings: 'tnum' on, 'lnum' on;
		letter-spacing: -0.01em;
		line-height: 1;
	}

	.metric-placeholder {
		display: flex;
	}

	.placeholder-name {
		color: #ACD1F6;

		font-family: 'Barlow';
		font-size: 12px;
		line-height: 1;
		font-weight: var(--inter-medium);
		letter-spacing: 0.05em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}

	.placeholder-value {
		color: #F5FAFF;

		font-family: 'Archivo';
		font-size: 12px;
		line-height: 1;
		font-weight: var(--barlow-medium);
		letter-spacing: 0.03em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}


</style>