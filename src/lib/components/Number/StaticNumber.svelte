<script lang=ts>
	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { padNumber } from "$lib/actions/pad-number";

	export let value = 8;
	export let fontSize = "26px";
	export let fontColor = "black";
	$: formattedValue = padNumber(value);
	// export let decimalRound = 3;
	
</script>



{#key value}
	<p
		in:fly={{y: 0, duration: 50, opacity: 0.6, easing: quintOut }}
		style:font-size={fontSize}
		style:color={fontColor}
		class="metric-value"
		>{formattedValue}
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