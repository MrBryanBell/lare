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
		margin-top: 200px;
		position: relative;
	}

	.container-overlay {
		width: 100%;
		height: 86px;
		background: linear-gradient(180deg, rgba(33, 99, 241, 0) 0%, #0171F4 100%);
		position: absolute;
		bottom: 0;
		left: 0;

		pointer-events: none;
	}
</style>
