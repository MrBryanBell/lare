<script lang="ts">
	import SubjectContextMenu from "$lib/components/SubjectContextMenu.svelte";
</script>



<div>
	<section>
		<SubjectContextMenu display="flex" />
	</section>
</div>




<style>
	div {
		height: 100vh;
		margin-left: 100px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 16px;
		margin-top: -100px;

		position: relative;
	}

	section {
		width: 200px;
		height: 200px;
		background-color: red;

		position: relative;
	}
</style>