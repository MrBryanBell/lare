<script lang="ts">
    import { student } from "../stores/student-store";
    import Square from '$lib/components/Square.svelte';
    
    $: PENSUM_SUBJECTS = student.pensum.subjects;
    
    $: g1 = PENSUM_SUBJECTS.filter((sub) => sub.area === 'gc');
    $: g2 = PENSUM_SUBJECTS.filter((sub) => sub.area === 'fc');
    $: g3 = PENSUM_SUBJECTS.filter((sub) => sub.area === 'pc');

    

    $: console.table(PENSUM_SUBJECTS);

    function getColor(value) {
        if (!value) return "#2982FA"
        if (value) return "#60A2FB"
    }


</script>

<div class="main-container" >
    
    <div class="container">

        <section class="first-row" >
            <section class="group-1" >
                {#each g1 as data }
                    <Square { data } />
                {/each}
            </section>

            <section class="group-3" >
                {#each g3 as data }
                    <Square { data } />
                {/each}
            </section>
        </section>


        <section class="group-2" >
            {#each g2 as data }
                    <Square { data } />
                {/each}
        </section>


    </div>
</div>


<style lang="scss" >

    .main-container {
        display: grid;
        place-content: center;

        margin-bottom: 48px;
    }


    .group-1, .group-2 {
        cursor: pointer;

        display: grid;
        grid-template-columns: repeat(5, 28px);
        grid-auto-rows: 28px;
        gap: 2px;

    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 158px);
        gap: 24px;
    }

    .group-3 {
        cursor: pointer;

        display: grid;
        grid-template-columns: 62px repeat(3, 28px);
        grid-auto-rows: 28px;

        gap: 2px;

    }
    
    .first-row {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

</style>


