<script>
    import { indexerText } from '$lib/stores/session-store';
    import { tooltip } from '$lib/actions/tooltip';

    export let data;

    function getColor(value) {
        if (value === 0) 
            return "#2982FA"
        
        return "#60A2FB"
    };

</script>



<div
	class="square"
	style:background-color={getColor(data.additions)}
	on:click={() => ($indexerText = data.name.toLowerCase())}
	data-subject-name={data.name}
	data-last-update="09/02/22"
    use:tooltip

    >{(data.additions > 1) ? data.additions : ''}

</div>



<style lang="scss">

    .square {
        border-radius: 2px;

        &:hover {
            outline: 2px solid white;
        }
    }


    .square {
        font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

letter-spacing: -0.016em;
font-feature-settings: 'tnum' on, 'lnum' on;

color: hsla(214, 95%, 84%, 1);

display: grid;
place-content: center;
    }

</style>
