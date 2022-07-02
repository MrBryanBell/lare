<script lang=ts>
	import { tweened } from "svelte/motion";
	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	export let metricValue = 8.654;
	export let fontSize = "26px";
	export let fontColor = "black";
	export let decimalRound = 3;
	
	const localValue = tweened(0);

	$: metricValue, localValue.set(metricValue);
</script>



{#key $localValue}
	<p
		in:fly={{y: 0, duration: 50, opacity: 0.6, easing: quintOut }}
		style:font-size={fontSize}
		style:color={fontColor}
		class="metric-value"
		>{$localValue.toFixed(decimalRound)}
	</p>
{/key}





<style>
	.metric-value {
		font-family: 'Archivo';
		line-height: 100%;
		font-weight: 500;
		letter-spacing: -0.025em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}
</style>