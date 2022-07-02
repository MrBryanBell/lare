<script lang="ts">
	import { changeCycleByScroll } from '../../actions/change-cycle';
	import { fly } from "svelte/transition";
	import ArrowButton from '../../icons/ArrowButton.svelte';
	import CycleProgressBar from '$lib/components/cycle-bar/CycleProgressBar.svelte';
	import CycleHeaderTitle from './CycleBarTitle.svelte';

	export let isTesting = false;

</script>




<div class="main-container">

	<div class="cycle-state-bar" on:wheel|preventDefault={changeCycleByScroll}>
		<img class="icon" src="/icons/cloud-sync.svg" alt="" />
		<p>ciclo /</p>
		<CycleHeaderTitle {isTesting} />
	</div>

	<section class="buttons-container">
		<ArrowButton actionType="goPrevious" height="42" />
		<ArrowButton actionType="goNext" height="42" />
	</section>

	<CycleProgressBar />

	<img
		in:fly={{x: -300, duration: 800, opacity: 0 }}
		class="carpeta-image" 
		src="/images/carpeta-image.png" 
		alt="" 
	/>
</div>




<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	$infoBar-background-color: #72acfd;
	$infoBar-text-color: #f5faff;

	div.main-container {
		//TODO: BORRAR
		min-height: 100px;

		background: linear-gradient(114.49deg, #fbfeff 0%, #f5fcff 100.78%);
		border-radius: 0.5rem 0.5rem 0 0;
		padding: 0 12px;

		position: relative;

		display: grid;
		grid-template-columns: 90px 1fr 90px;
		grid-template-rows: 1fr 12px;
		grid-template-areas:
			'title title title'
			'title title title';
	}

	.cycle-state-bar {
		grid-area: title;
		display: flex;
		align-items: center;
		justify-content: center;

		& > .icon {
			margin-left: 16px;
			margin-right: 8px;
		}

		p {
			@include text-mixin('Inter', 16px, 1, var(--inter-medium), #3b4768, -0.01em);
			margin-right: 2px;
		}
	}

	.buttons-container {
		grid-column: 3 / 4;
		grid-row: 1 / span 2;

		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100%;
	}

	.carpeta-image {
		cursor: auto;
		/* .main-container es el relative */
		position: absolute;
		z-index: 10;
		left: 20px;

		transform: translateY(-14px) rotate(-10deg);

		animation-name: move;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-fill-mode: forwards;
		animation-direction: alternate;
	}

	@keyframes move {
		to {
			transform: translateY(8px) rotate(-10deg);
		}
	}
</style>
