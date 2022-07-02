<script lang="ts">
	import { fly } from 'svelte/transition';
	import { shiftGradeByScroll } from '$lib/actions/shift-grade-by-scroll';

	export let index = 1;
	export let subject = {
		id : 'b92ba872-b74d-447b-b33d-970d3b2dc8ef',
		grade : 9.6,
	}
</script>



<div 
	class="card-wrapper" 
	in:fly={{ y: -20, duration: 300, delay: ++index * 50 }}
	on:wheel|preventDefault={(event) => shiftGradeByScroll(event, subject)}
	data-subject-id={subject.id}
	data-testId="card-wrapper"
	>

	<slot>No Data rendered</slot>

</div>



<style lang="scss">
	.card-wrapper {
		padding: 16px 12px;
		background-color: #ffffff;
		border-radius: 0.5rem;

		position: relative;
		cursor: pointer;
		transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);

		&:hover {
			outline: 2px solid #4ca5ff;
			background-color: #F6F9FE;
		}
	}
</style>
