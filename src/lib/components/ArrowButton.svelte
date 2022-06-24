<script lang="ts">
	import type { ActionType } from '$lib/actions/get-test-id';
	import { changeCycleByClick } from '$lib/actions/change-cycle';

	export let actionType: ActionType = 'goNext';
	// 	data-testid={getTestId(actionType)}
</script>


<img
	on:click={changeCycleByClick}
	class:rotate-80deg={actionType === 'goNext'}
	data-action-type={actionType}
	data-testid={`${actionType}-button`}
	src="/icons/arrow-circle.svg"
	alt=""
/>


<style>
	img {
		width: 42px;
		aspect-ratio: 1/1;
		opacity: 0.5;

		transition: all 0.2s ease-in;
	}

	img:hover {
		opacity: 1;
	}

	/* if go next, turn 80deg */
	.rotate-80deg {
		transform: rotate(180deg);
	}
</style>
