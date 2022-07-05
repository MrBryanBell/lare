<script lang="ts">
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import Card from './SubjectCard/SubjectCard.svelte';
	import { cycle } from '../stores/cycle-counter-store';
	import { student } from '../stores/student-store';

	let subjectContainer: HTMLElement;

	const subjects = student.subjects$;
	$: currentSubjects = $subjects.filter((subject) => subject.cycle === $cycle.number);

	onMount(() => {
		let sortList = Sortable.create(subjectContainer, {
			group: {
				name: 'pensumSubjects',
			},
			dragClass: 'sortdrag',
			ghostClass: 'sortable-ghost',
			forceFallback: true,
			easing: 'cubic-bezier(1, 0, 0, 1)',

			onAdd: function (evt) {
				// obtiene el nuevo index del elemento que se ha agregado
				// recuerda que cuando se mueven de contenedor, las cards tienen oldIndex & newIndex
				let subjectIndex = evt.newIndex!;
				
				// Al inicio se agrega la pensumCardResult
				// obtiene el code del elemento que se ha agregado
				// busca esa materia utilizando el código y utiliza la data para completar los props de la nueva materia
				// luego de obtener los datos de la materia, eliminamos la pensumCardResult
				// en student.enroll se encargará de insertar una materia nueva en esa posición (index).
				let PensumSubjectCard = evt.item
				let subjectCode = PensumSubjectCard.dataset.subjectCode!;
				PensumSubjectCard.remove();

				student.enroll(subjectCode, subjectIndex);
			},
		});
	});

</script>



<div class="white-wrapper">
	<div bind:this={subjectContainer} class="skyblue-wrapper">
		{#each currentSubjects as materia, i (materia.id)}
			<Card subject={materia} index={i} />
		{:else}
			<p>No hay data aún</p>
		{/each}

		<div class="placeholder" />
	</div>
</div>




<style lang="scss">
	$skyblue-wrapper-bg: #c2ddff;

	.white-wrapper {
		background: linear-gradient(114.49deg, #fbfeff 0%, #f5fcff 100.78%);
		border-radius: 0px 0px 8px 8px;
		padding: 4px 12px 16px;
		// active the next line when component adder is active
		// filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.04));
	}

	.skyblue-wrapper {
		//TODO: esta medida debe variar dependiendo del tamaño de la pantalla
		//TODO: ex: pantalla blanca Bryan: 500px,
		/* pantalla negra: 460px y reducir el espacio entre AssitanBar y Notebook */
		min-height: 500px;
		background-color: $skyblue-wrapper-bg;
		padding: 20px 16px;
		border-radius: 8px;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
		// grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
		grid-auto-rows: 166px;
		gap: 12px;
		// outline: 1px solid red;
		position: relative;

		transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);

		&:hover {
			background-color: #add2ff;
		}

		&:hover .placeholder {
			background-color: #add2ff;
		}
	}

	.placeholder {
		width: 200px;
		height: 6px;
		background-color: $skyblue-wrapper-bg;

		position: absolute;
		z-index: 20;
		top: 0;
		left: 10px;
	}
</style>
