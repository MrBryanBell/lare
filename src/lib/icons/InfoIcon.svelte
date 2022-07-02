<script lang=ts>
	export let fill = 'black';
	export let hoverFill = 'red';
	export let height = "200";
	export let position = "static";
	export let inset = "auto 0 0 auto";
</script>



<svg
	style:inset={inset}
	style:position={position}
	style="--hover-color: {hoverFill};"
	width={height}
	height={height}
	viewBox="0 0 24 24" 
	xmlns="http://www.w3.org/2000/svg"
	>

	<path
		{fill}
		d="M3.42871 11.9997C3.42871 16.7335 7.26627 20.5711 12.0001 20.5711C16.734 20.5711 20.5716 16.7335 20.5716 11.9997C20.5716 7.26578 16.734 3.42822 12.0001 3.42822C7.26627 3.42822 3.42871 7.26578 3.42871 11.9997ZM12.893 7.71394C12.893 8.20705 12.4933 8.60679 12.0001 8.60679C11.507 8.60679 11.1073 8.20705 11.1073 7.71394C11.1073 7.22083 11.507 6.82108 12.0001 6.82108C12.4933 6.82108 12.893 7.22083 12.893 7.71394ZM12.0001 9.85679C12.3946 9.85679 12.7144 10.1766 12.7144 10.5711L12.7144 16.2854C12.7144 16.6799 12.3946 16.9997 12.0001 16.9997C11.6057 16.9997 11.2859 16.6799 11.2859 16.2854L11.2859 10.5711C11.2859 10.1766 11.6057 9.85679 12.0001 9.85679Z"
	/>

</svg>




<style>
	svg:hover {
		cursor: pointer;
	}

	svg:hover path {
		fill: var(--hover-color);
	}

	svg path {
		transition: fill 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}
</style>