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
			>{$cycle.inString.toUpperCase()}
	</h4>
{/key}

<style lang="scss">
	@import '../styles/utils/_mixins.scss';

	h4 {
		@include text-mixin('Barlow', 24px, 1, var(--barlow-bold), #3b4768, 0.05em);
		margin-right: 16px;
	}
</style>
