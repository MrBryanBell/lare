<script lang="ts">
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import { student } from '../../stores/student-store';
	import { searchBoxText } from '$lib/stores/session-store';
	import PensumSubjectCard from '$lib/components/PensumSubjectCard.svelte';

	let pensumCardContainer: HTMLElement;
	const pensumSubjects = student.pensumSubjects$;

	onMount(() => {
		let sortList = Sortable.create(pensumCardContainer, {
			group: {
				name: 'pensumSubjects',
				pull: true,
				put: false,
			},
			forceFallback: true,
			easing: 'cubic-bezier(1, 0, 0, 1)',
		});
	});

	$: subjectResults = $pensumSubjects
		.filter(({ name }) =>
			name.toLowerCase()
			.startsWith($searchBoxText.toLocaleLowerCase()),
		);
</script>




<section 
	class="pensum-subject-results" 
	bind:this={pensumCardContainer}
	>
	{#key $searchBoxText}
		{#each subjectResults as materia, index}
			<PensumSubjectCard data={materia} {index} />
		{:else}
			<p>No se encontraron resultados</p>
		{/each}
	{/key}
</section>



<style>
	.pensum-subject-results {
		width: 404px;
		height: 400px;
		overflow-y: scroll;

		background-color: #4b9efb;
		border-radius: 8px 8px 0px 0px;
		padding: 20px 16px;
		
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: 148px;
		gap: 12px;
	}
</style>
