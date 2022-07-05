<script lang="ts">
    import Sortable from 'sortablejs';
    import { onMount } from 'svelte';
		import { cycle } from '../stores/cycle-counter-store'
    import Card from "./SubjectCard/SubjectCard.svelte";
    import { StudentSubject } from '../models/classes/student-subject';

    import { student } from "../stores/student-store";
    import type { StudentSubjectProps } from '../models/constructors/subject-props';

    let domElement;

    // $: materiasAct = $student.subjects.filter((mt) => mt.cycle === $cycle.number);
		let subs = student.subjects$;
    $: materiasAct = $subs.filter((mt) => mt.cycle === $cycle.number);
 
    onMount(() => {

        let sortList = Sortable.create(domElement, {
	        group: {
	        	name: 'pensumSubjects',
	        },

            dragClass: "sortdrag",
            ghostClass: "sortable-ghost",
            forceFallback: true,
            
	        easing: "cubic-bezier(1, 0, 0, 1)",

            onAdd: function (evt) {
                let index = evt.newIndex;

                let code = evt.item.getAttribute('data-subject-code');
                
                let selectedSubject = $student.pensum.subjects.find((sub) => sub.code === code );

                let newSubject: StudentSubjectProps = { 
                    id: self.crypto.randomUUID(),
                    name: selectedSubject.name,
                    code: selectedSubject.code,
                    uv: selectedSubject.uv,
                    pensumOrder: selectedSubject.pensumOrder,
                    isOptative: selectedSubject.isOptative,
                    grade: 0,
                    cycle: $cycle.number,
                }
                
                let newSubjectParsed = new StudentSubject({...newSubject});
                let otherMaterias = $student.subjects.filter((mt) => mt.cycle !== $cycle.number);
                let currentMaterias = $student.subjects.filter((mt) => mt.cycle === $cycle.number);
                
                currentMaterias.splice(index, 0, newSubjectParsed);
 
                //UPDATE THE DOM
                evt.item.remove();
                $student.subjects = [...otherMaterias, ...currentMaterias];

                //UPDATE THE $PENSUM_SUBJECTS (ADDITIONS)
                // pensum.updateSubjectAdditions(selectedSubject.pensumOrder, 1);

            }

        });

    });

		// $: console.table($subjects2);
</script>



<div class="white-wrapper">
  <div bind:this={domElement} class="skyblue-wrapper">
  	{#each materiasAct as materia, i (materia.id) }
  	  <Card subject={materia} index={i}/>
  	{:else}
  	  <p>No hay data aún</p>
  	{/each}

		<div class="placeholder"></div>
  </div>
</div>




<style lang="scss">

	$skyblue-wrapper-bg: #C2DDFF;

  .white-wrapper {
    background: linear-gradient(114.49deg, #FBFEFF 0%, #F5FCFF 100.78%);
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
			background-color: #ADD2FF;
		}
		
		&:hover .placeholder{
			background-color: #ADD2FF;
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
