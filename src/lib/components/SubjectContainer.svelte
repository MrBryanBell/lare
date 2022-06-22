<script lang="ts">

    import Sortable from 'sortablejs';
    import Card from "$lib/components/Card.svelte";
    import { onMount } from 'svelte';
    import { cicloActual } from '$lib/stores/cycle_store';
    import { SubjectStudent } from '../models/classes/subject-student';
    import { pensum } from "../stores/pensum-store";
    import { student } from "../stores/student-store";
    import type { SubjectStudentConstructor } from '../models/constructors/subject';

    let domElement;

    let STUDENT_SUBJECTS = student.subjects$;
    let PENSUM_SUBJECTS = pensum.subjects$;


    $: materiasAct = $STUDENT_SUBJECTS.filter((mt) => mt.cycle === $cicloActual);
 
    onMount(() => {

        let sortList = Sortable.create(domElement, {
	        group: {
	        	name: 'cuteList',
	        },

            dragClass: "sortdrag",
            ghostClass: "sortable-ghost",
            forceFallback: true,
            
	        easing: "cubic-bezier(1, 0, 0, 1)",

            onAdd: function (evt) {
                let index = evt.newIndex;

                let code = evt.item.getAttribute('data-subject-code');
                
                let selectedSubject = $PENSUM_SUBJECTS.find((sub) => sub.code === code );

                let newSubject: SubjectStudentConstructor = { 
                    id: self.crypto.randomUUID(),
                    name: selectedSubject.name,
                    code: selectedSubject.code,
                    uv: selectedSubject.uv,
                    pensumOrder: selectedSubject.pensumOrder,
                    isOptative: selectedSubject.isOptative,
                    grade: 0,
                    cycle: $cicloActual,
                }
                
                let newSubjectParsed = new SubjectStudent({...newSubject});
                let otherMaterias = $STUDENT_SUBJECTS.filter((mt) => mt.cycle !== $cicloActual);
                let currentMaterias = $STUDENT_SUBJECTS.filter((mt) => mt.cycle === $cicloActual);
                
                currentMaterias.splice(index, 0, newSubjectParsed);
 
                //UPDATE THE DOM
                evt.item.remove();
                $student.subjects = [...otherMaterias, ...currentMaterias];

                //UPDATE THE $PENSUM_SUBJECTS (ADDITIONS)
                pensum.updateSubjectAdditions(selectedSubject.pensumOrder, 1);

            }

        });

    });

</script>



<nav on:click={() => console.log($PENSUM_SUBJECTS)} >
    
    <article bind:this={domElement} >
            {#each materiasAct as materia, i (materia.id) }
                <Card data={materia} index={i}/>
            {:else}
                <p>No hay data aún</p>
            {/each}
    </article>
    
</nav>




<style lang="scss">
    nav {
        background: linear-gradient(114.49deg, #FBFEFF 0%, #F5FCFF 100.78%);
        border-radius: 0px 0px 8px 8px;
        padding: 4px 16px 20px;
        
        // ACTIVE THE NEXT LINE WHEN COMPONENT ADDER IS ACTIVE
        // filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.04));
    }

    article {
        
        //TODO: AJUSTAR ESTO A MENOS DE 476px
        min-height: 528px;

        background-color: #E2ECFE;
        padding: 24px 20px;
        border-radius: 8px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        // grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
        grid-auto-rows: 184px;
        gap: 12px;
        // outline: 1px solid red;
    }
</style>
