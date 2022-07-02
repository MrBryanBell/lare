<script lang="ts">
	import { padNumber } from '$lib/actions/pad-number';

	export let grade: number = 9.6;
	export let uv: number = 4;
	$: formattedUv =`${padNumber(uv)} uv`
</script>



<div class="subject-metrics">

	<div class="uv-wrapper">
		<p 
			class="subject-uv" 
			data-testId="subject-uv"
				>{formattedUv}
		</p>
		<img src="/icons/uv-icon.svg" alt="">
	</div>
	
	<div class="subject-status">
		<h4
			class="subject-grade"	
			data-testId="subject-grade"
			>{grade.toFixed(1)}
		</h4>

		<img
			class="icon-status"
			data-testId="icon-status"
			src="/icons/checkmark.svg" 
			alt="" 
		/>
	</div>

</div>



<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	.subject-uv {
    @include text-mixin('Archivo', 13px, 1, var(--archivo-medium),#6280A7, 0.05em);
    font-feature-settings: 'tnum' on, 'lnum' on;
	}

	.subject-grade {
    @include text-mixin('Archivo', 19px, 1, 560,#313B4A, -0.064em);
    font-feature-settings: 'tnum' on, 'lnum' on;
		font-stretch: 100;
	}

	.subject-metrics {
		@include flex-container(column, flex-start, 2px);
	}

	.subject-status {
		display: flex;
    gap: 4px;
	}

	.uv-wrapper {
		display: flex;
		flex-direction: row;
		gap: 2px;
	}

</style>