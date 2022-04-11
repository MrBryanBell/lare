<script>
	import { totalUMG as inputValue } from '$lib/stores/materia_store';

	$: console.log($inputValue);


	// let inputValue = 1522;
	$: chartValue = $inputValue * 0.2319526627 - 392;
	$: leftOffset =
		$inputValue < 10
			? '44%'
			: $inputValue < 100
			? '41%'
			: $inputValue < 1000
			? '37%'
			: $inputValue >= 1000
			? '34%'
			: null;

	$: console.log(leftOffset);
</script>

<svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M141.423 160.284C154.036 149.7 163.076 135.482 167.31 119.571C171.544 103.659 170.765 86.8286 165.079 71.3761C159.394 55.9236 149.079 42.6018 135.542 33.2285C122.006 23.8552 105.906 18.887 89.4415 19.002C72.9767 19.1169 56.9483 24.3094 43.5438 33.8708C30.1392 43.4322 20.0113 56.8968 14.5422 72.4271C9.07308 87.9575 8.52917 104.797 12.9847 120.648C17.4402 136.499 26.678 150.589 39.4377 160.996"
		stroke="#F0F4FF"
		stroke-width="6"
		stroke-linecap="round"
	/>

	<g filter="url(#filter0_d_1021_1898)">
		<path
			d="M141.423 160.284C154.036 149.7 163.076 135.482 167.31 119.571C171.544 103.659 170.765 86.8286 165.079 71.3761C159.394 55.9236 149.079 42.6018 135.542 33.2285C122.006 23.8552 105.906 18.887 89.4415 19.002C72.9767 19.1169 56.9483 24.3094 43.5438 33.8708C30.1392 43.4322 20.0113 56.8968 14.5422 72.4271C9.07308 87.9575 8.52917 104.797 12.9847 120.648C17.4402 136.499 26.678 150.589 39.4377 160.996"
			stroke="url(#paint0_linear_1021_1898)"
			stroke-width="12"
			stroke-linecap="round"
			stroke-dasharray="392"
			stroke-dashoffset={chartValue}
		/>
	</g>
	<g filter="url(#filter1_d_1021_1898)">
		<circle cx="90.055" cy="99.055" r="60.055" fill="#F0F4FF" />
	</g>

	<text
		fill="#539CFA"
		xml:space="preserve"
		style="white-space: pre"
		font-family="Barlow"
		font-size="28.6615"
		font-weight="600"
		letter-spacing="0em"
	>
		<tspan x={leftOffset} y="93.9646">{$inputValue.toFixed(0)} </tspan>
	</text>

	<text
		fill="#539CFA"
		xml:space="preserve"
		style="white-space: pre"
		font-family="Inter"
		font-size="10.5"
		font-weight="500"
		letter-spacing="0em"
	>
		<tspan x="58.7455" y="111.318">unidades de </tspan>
		<tspan x="50.5629" y="124.318">mérito ganadas </tspan>
	</text>
    
	<defs>
		<filter
			id="filter0_d_1021_1898"
			x="0"
			y="9"
			width="184"
			height="165.996"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dx="2" dy="2" />
			<feGaussianBlur stdDeviation="3" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix
				type="matrix"
				values="0 0 0 0 0.137255 0 0 0 0 0.505882 0 0 0 0 0.976471 0 0 0 0.35 0"
			/>
			<feBlend
				mode="normal"
				in2="BackgroundImageFix"
				result="effect1_dropShadow_1021_1898"
			/>
			<feBlend
				mode="normal"
				in="SourceGraphic"
				in2="effect1_dropShadow_1021_1898"
				result="shape"
			/>
		</filter>
		<filter
			id="filter1_d_1021_1898"
			x="-20.5727"
			y="-9.22676"
			width="221.255"
			height="221.255"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="2.3459" />
			<feGaussianBlur stdDeviation="25.2863" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix
				type="matrix"
				values="0 0 0 0 0.160784 0 0 0 0 0.513726 0 0 0 0 0.972549 0 0 0 0.15 0"
			/>
			<feBlend
				mode="normal"
				in2="BackgroundImageFix"
				result="effect1_dropShadow_1021_1898"
			/>
			<feBlend
				mode="normal"
				in="SourceGraphic"
				in2="effect1_dropShadow_1021_1898"
				result="shape"
			/>
		</filter>
		<linearGradient
			id="paint0_linear_1021_1898"
			x1="192.932"
			y1="57.93"
			x2="52.0874"
			y2="190.89"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#124DD9" />
			<stop offset="1" stop-color="#3993FE" />
		</linearGradient>
	</defs>
</svg>

<style lang="scss">
	svg {
		width: 100%;

		// outline: 1px solid lightgray;
	}
</style>
