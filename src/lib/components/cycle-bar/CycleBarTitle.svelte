<script lang=ts>
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { cycle } from '$lib/stores/cycle-counter-store';

	export let isTesting = false;
	$: observer = ((isTesting) ? false : $cycle);
</script>

{#key observer}
	<h4
		in:fly={{ duration: 260, easing: cubicOut }}
		data-testid="current-cycle-in-string"
			>{$cycle.inString}
	</h4>
{/key}

<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	h4 {
		@include text-mixin('Archivo', 28px, 1, 600, #0E1F44, -0.005em);
		margin-right: 16px;
		font-stretch: 94%;
		/* font-variation-settings: 'wdth' 94; */
	}
</style>
