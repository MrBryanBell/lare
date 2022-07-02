<script>
	import InfoIcon from "$lib/icons/InfoIcon.svelte";
	import { student } from "$lib/stores/student-store";

	const totalUmg = student.totalUmg$;
</script>



<div class="calculator-wrapper">
	
	<h4 class="metric-name">Unidades de Mérito</h4>
	<section class="metric-placeholder">
		<span class="placeholder-name">REPT: </span>
		<p class="placeholder-value">256</p>
		<img class="arrow-icon" src="" alt="">
	</section>

	<img
		class="calculator-image" 
		src="/images/calculator.png" 
		alt=""
	>
	
	<p class="umg-value" >{$totalUmg.toFixed(2)}</p>

	<InfoIcon 
		height="24px"
		position="absolute"
		inset="auto 12px 12px auto"
		fill="#ACD1F6" 
		hoverFill="#DAE0E7"
	/>
</div>




<style>
	.calculator-wrapper {
		padding: 16px;
		padding-top: 20px;
		background: #399af9;
		border-radius: 12px;
		box-shadow: inset 2px 2px 8px #76b2fa, inset -2px -2px 8px #318cf7;

		position: relative;
	}

	.calculator-image,
	.umg-value {
	  position: absolute;
	  left: 50%;
	  bottom: 0;
		transform: translateX(-50%);
	}

	.umg-value {
		color: #EDEDED;

		font-family: 'Archivo';
		font-size: 48px;
		font-weight: 500;
		line-height: 100%;

		letter-spacing: -0.044em;
		font-feature-settings: 'tnum' on, 'lnum' on;
		bottom: 64px;
	}

	.metric-name {
		color: #FFFFFF;
		margin-bottom: 4px;

		font-family: 'Inter';
		font-weight: var(--inter-medium);
		font-size: 13px;
		font-feature-settings: 'tnum' on, 'lnum' on;
		letter-spacing: -0.01em;
		line-height: 1;
	}

	.metric-placeholder {
		display: flex;
	}

	.placeholder-name {
		color: #ACD1F6;

		font-family: 'Barlow';
		font-size: 12px;
		line-height: 1;
		font-weight: var(--inter-medium);
		letter-spacing: 0.05em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}

	.placeholder-value {
		color: #F5FAFF;

		font-family: 'Archivo';
		font-size: 12px;
		line-height: 1;
		font-weight: var(--barlow-medium);
		letter-spacing: 0.03em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}
</style>
