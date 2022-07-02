<script lang=ts>
	import StaticNumber from "./StaticNumber.svelte";
	export let value = 14;
	export let placeholder = 30;
	export let fontColor = "black";
	export let fontSize = "26px";
</script>




<div class="wrapper">
	<StaticNumber
		value={value}
		{fontColor}
		{fontSize}
	/>

	<span
		style:font-size={fontSize}
		style:color={fontColor}
		>/
	</span>

	<StaticNumber
		value={placeholder}
		{fontColor}
		{fontSize}
	/>
</div>




<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 0;
	}

	span {
		font-family: 'Archivo';
		line-height: 100%;
		font-weight: 500;
		letter-spacing: -0.025em;
		font-feature-settings: 'tnum' on, 'lnum' on;
	}
</style>