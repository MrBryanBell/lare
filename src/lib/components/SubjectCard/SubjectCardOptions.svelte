<script lang="ts">
	import { showContextMenu } from '$lib/actions/show-context-menu';

	export let subjectId = 'b92ba872-b74d-447b-b33d-970d3b2dc8ef';
</script>



<span class="icon-wrapper" >
	<button
		class="options-menu"
		use:showContextMenu={subjectId}
			>
		<img src="/icons/options-menu.svg" alt="" />
	</button>
</span>



<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	span {
		display: flex; 
		flex-direction: column; 
		justify-content: flex-start; 
		gap: 0;
		
    height: 34px;
	}

	button {
		border: none;
		background-color: transparent;
		position: relative;
		//outline: 1px solid red;
		height: 28px;
	}
</style>