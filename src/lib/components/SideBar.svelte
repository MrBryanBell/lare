<script lang="ts">
	import PensumBrowser from '$lib/components/PensumBrowser.svelte';
	import { fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';

	let pensumBrowser: PensumBrowser;

	let outTransition = {
		x: 480,
		duration: 400,
		opacity: 0.5,
		easing: quartInOut, // backInOut
	};

	let introTransition = {
		x: 480,
		duration: 400,
		opacity: 0.5,
		easing: quartInOut,
	};
</script>



<div 
	out:fly={outTransition} 
	in:fly={introTransition} 
	on:introend={() => pensumBrowser.focusSearchBox()}
	>
	<PensumBrowser bind:this={pensumBrowser} />
</div>




<style lang="scss">
	div {
		background: linear-gradient(180deg, #1b7efd 0%, #2163f1 51.04%, #1b7efd 100%);
		padding: 40px 24px 48px;
		padding-right: 96px;
		height: 100vh;

		position: fixed;
		top: 0;
		right: 0;

		transform: translateX(72px);
	}
</style>
