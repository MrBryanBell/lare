<script>
    let group1 = [], group2 = [], group3 = [];

    for (let i = 0; i < 15; i++) {
        if (i % 2 === 0) {
            group1 = [...group1, true];
        } else {
            group1 = [...group1, false];
        }
    };

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            group2 = [...group2, true];
        } else {
            group2 = [...group2, false];
        }
    };

    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            group3 = [...group3, true];
        } else {
            group3 = [...group3, false];
        }
    };

    function getColor(value) {
        if (value) return "#2982FA"
        if (!value) return "#60A2FB"
    }


</script>

<div class="main-container" >
    <div class="container">

        <section class="first-row" >
            <section class="group-1" >
                {#each group1 as item}
                     <div style:background-color={getColor(item)} ></div>
                {/each}
            </section>

            <section class="group-3" >
                {#each group3 as item}
                    <div style:background-color={getColor(item)} ></div>
                {/each}
            </section>
        </section>


        <section class="group-2" >
            {#each group2 as item}
                <div style:background-color={getColor(item)} ></div>
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


