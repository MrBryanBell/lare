<script lang="ts">
	import { changeCycleByScroll } from '../actions/change-cycle'
	import ArrowButton from './ArrowButton.svelte';
	import CycleProgressBar from '$lib/components/CycleProgressBar.svelte';
	import CycleHeaderTitle from './CycleHeaderTitle.svelte';

	export let isTesting = false;

</script>

<div class="main-container">

	<div class="cycle-state-bar" on:wheel|preventDefault={changeCycleByScroll}>
		<img class="icon" src="/icons/cloud-sync.svg" alt="" />
		<p>CICLO /</p>
		<CycleHeaderTitle {isTesting} />
		<!-- <img src="/icons/barChart.svg" alt="" /> -->
	</div>

	<section class="buttons-container">
		<ArrowButton actionType="goPrevious" />
		<ArrowButton actionType="goNext" />
	</section>

	<CycleProgressBar />

	<img class="luckImage" src="/images/embud.png" alt="" />
</div>

<style lang="scss">
	@import '../styles/_cycleBar.scss';
</style>
