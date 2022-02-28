<script>
    import { listOfSubjects } from '../stores/listOfSubjects';
    
    $: g1 = $listOfSubjects.filter((sub) => sub.area === 'gc');
    $: g2 = $listOfSubjects.filter((sub) => sub.area === 'fc');
    $: g3 = $listOfSubjects.filter((sub) => sub.area === 'pc');

    $: console.table($listOfSubjects);

    function getColor(value) {
        if (!value) return "#2982FA"
        if (value) return "#60A2FB"
    }


</script>

<div class="main-container" >
    <div class="container">

        <section class="first-row" >
            <section class="group-1" >
                {#each g1 as item}
                     <div style:background-color={getColor(item.isAdded)} ></div>
                {/each}
            </section>

            <section class="group-3" >
                {#each g3 as item}
                    <div style:background-color={getColor(item.isAdded)} ></div>
                {/each}
            </section>
        </section>


        <section class="group-2" >
            {#each g2 as item}
                <div style:background-color={getColor(item.isAdded)} ></div>
            {/each}
        </section>


    </div>
</div>


<style lang="scss" >

    .main-container {
        display: grid;
        place-content: center;

        margin-bottom: 68px;
    }


    .group-1, .group-2 {
        // background-color: red;

        display: grid;
        grid-template-columns: repeat(5, 30px);
        grid-auto-rows: 30px;
        gap: 2px;

        div {
            border-radius: 2px;
        }
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 158px);
        gap: 24px;
    }

    .group-3 {
        // background-color: red;

        display: grid;
        grid-template-columns: 62px repeat(3, 30px);
        grid-auto-rows: 30px;

        gap: 2px;

        div {
            border-radius: 2px;
        }
    }
    
    .first-row {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

</style>


