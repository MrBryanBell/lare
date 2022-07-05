<script lang="ts">
	import PensumSubjectResult from './pensum-browser/PensumSubjectResults.svelte';
	import SearchBox from './pensum-browser/SearchBox.svelte';

	let searchBox: SearchBox;

	export function focusSearchBox() {
		searchBox.focus();
	}
</script>




<div class="main-container">

	<SearchBox bind:this={searchBox} />
	<PensumSubjectResult />

	<div class="container-overlay"></div>
</div>




<style lang="scss">
	@import '../styles/utils/_mixins.scss';

	.main-container {
		position: relative;
	}

	.container-overlay {
		width: 100%;
		height: 86px;
		background: linear-gradient(180deg, rgba(30, 114, 248, 0) 0%, #1e74f9 100%);
		position: absolute;
		bottom: 0;
		left: 0;

		pointer-events: none;
	}
</style>
