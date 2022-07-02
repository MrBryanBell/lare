<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { cycle } from '$lib/stores/cycle-counter-store';

	let progressValue = tweened(0, {
		duration: 300,
		easing: cubicOut,
	});

	$: $cycle, progressValue.set($cycle.progressPercentage);

</script>

<div>
	<section 
		style:width={`${$progressValue}%`}
		data-width={`${$progressValue}%`}
		data-testId="progress-bar"
	/>
</div>

<style lang="scss">
	div {
		width: 100%;
		height: 3px;
		background-color: transparent;
		border-radius: 4px;

		position: absolute;
		top: 0px;
		left: 0;
		z-index: 10;

		overflow: hidden;

		section {
			height: 100%;
			background: linear-gradient(
				90.28deg,
				rgba(176, 203, 252, 0.6) 0.25%,
				rgba(108, 201, 255, 0.6) 47.16%,
				rgba(62, 117, 241, 0.8) 98.16%
			);
		}
	}
</style>
