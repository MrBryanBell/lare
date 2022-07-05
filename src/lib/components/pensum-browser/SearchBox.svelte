<script lang=ts>
	import { searchBoxText } from '$lib/stores/session-store';

	let searchBox: HTMLInputElement;

	export function focus() {
		searchBox.focus();
	}
</script>


<input
	class="search-box"
	bind:value={$searchBoxText}
	bind:this={searchBox}
	placeholder="Escribe el nombre de una materia..."
	type="text"
/>







<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	.search-box {
		border: 1px solid #88bdfb;
		background-color: transparent;
		padding: 15px 16px;
		border-radius: 4px;

		@include text-mixin('Inter', 14px, 16px, var(--inter-regular), #f5faff, -0.01em);

		// TODO: BORRAR
		outline: none;
		width: 100%;
		margin-bottom: 20px;
	}

	::placeholder {
		@include text-mixin('Inter', 14px, 16px, var(--inter-regular), #f5faff, -0.02em);
	}
</style>