<script>
    import { indexerText } from '../stores/session_store';
    // import { tooltip } from '../actions/tooltip';
    // use:tooltip

    export let data;

    function getColor(value) {
        if (!value) return "#2982FA"
        if (value) return "#60A2FB"
    };

</script>



<div
	class="square"
	style:background-color={getColor(data.isAdded)}
	on:click={() => ($indexerText = data.name.toLowerCase())}
	data-subject-name={data.name}
	data-last-update="09/02/22"
/>



<style lang="scss">

    .square {
        border-radius: 2px;

        &:hover {
            outline: 2px solid white;
        }
    }

</style>
