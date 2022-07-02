<script lang="ts">
	import { changeCycleByClick } from '$lib/actions/change-cycle';
	import { cycle } from '$lib/stores/cycle-counter-store';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import PruebaSpan from './PruebaSpan.svelte';

	export let isTesting = false;
	$: observer = isTesting ? false : $cycle;
</script>

{#key observer}
	<h1 in:fly={{ duration: 260, easing: cubicOut }} data-testId="h1">{$cycle.inString}</h1>
{/key}
<button
	data-testId="button"
	data-action-type="goNext"
	on:click={changeCycleByClick}
	data-bg-color="rgb(240, 240, 240)"
		>Go Next Cycle
</button>
<PruebaSpan />

<!-- 'rgb(240, 240, 240)' -->

<style>
	button {
		background-color: red;
	}
</style>
