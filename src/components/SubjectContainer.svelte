<script>
    import Sortable from 'sortablejs';
    import Card from "./Card.svelte";
    import { onMount } from 'svelte';
    import { materias } from '../stores/materia_store.js';
    import { cicloActual } from '../stores/cycle_store';
    import { MateriaClass } from "../classes/materia_class";
    import { listOfSubjects } from "../stores/listOfSubjects";

    let domElement;

    $: materiasAct = $materias.filter((mt) => mt.cycle === $cicloActual);

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
                
                let selectedSubject = $listOfSubjects.find((sub) => sub.code === code );
                let newSubject = {...selectedSubject, cycle: $cicloActual, id: self.crypto.randomUUID() }
                delete newSubject.area
                delete newSubject.isAdded
                
                let newSubjectParsed = new MateriaClass({...newSubject});
                let otherMaterias = $materias.filter((mt) => mt.cycle !== $cicloActual);
                let currentMaterias = $materias.filter((mt) => mt.cycle === $cicloActual);
                
                currentMaterias.splice(index, 0, newSubjectParsed);
 
                //UPDATE THE DOM
                evt.item.remove();
                $materias = [...otherMaterias, ...currentMaterias];

                //UPDATE THE $LIST_OF_SUBJECTS
                listOfSubjects.update((subjects) => {
                    let index = subjects.findIndex((sub) => sub.code === selectedSubject.code)
                    subjects[index].isAdded = true;
                    return subjects;
                })
                selectedSubject.isAdded = true;
                // console.table($listOfSubjects);

                //SIDE EFFECTS
                $listOfSubjects = $listOfSubjects;
            }

        });

    });

</script>



<nav>
    
    <article bind:this={domElement} >
            {#each materiasAct as materia, i (materia.id) }
                <Card data={{...materia}} index={i}/>
            {:else}
                <p>No hay data aún</p>
            {/each}
    </article>
    
</nav>




<style lang="scss">
    nav {
        background: #FFFFFF;
        border-radius: 0px 0px 8px 8px;
        padding: 16px 16px 20px;
    }

    article {
        min-height: 476px;
        background-color: #F2F2F2;
        padding: 20px 16px;
        border-radius: 8px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        // grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
        grid-auto-rows: 204px;
        gap: 12px;
        // outline: 1px solid red;
    }
</style>
