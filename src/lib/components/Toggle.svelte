<script lang="ts" >
	export let isActive = false;
</script>



<input 
	bind:checked={isActive} 
	id="switch" 
	type="checkbox" 
	data-testid="checkbox"
/>

<label
	class="switch" 
	class:active-switch={isActive}
	data-testid="switch"
	for="switch" 
	>
	<div
		class="knob" 
		class:active-knob={isActive}
		data-testid="knob"
	/>
</label>



<style lang="scss" >
	@import '../styles/_toggle.scss';
</style>
