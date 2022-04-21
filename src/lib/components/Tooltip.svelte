<script>
    import { fade, fly } from "svelte/transition";
    
    export let text;
    export let lastUpdate;
    export let x;
    export let y;


</script>




<div
    class="main-container"
    style:top={y}
    style:left={x}
    >
	<p class="materia-name"> {text} </p>
	<span> Última vez modificada: </span>
	<time> {lastUpdate} </time>
	<svg
		width="12"
		height="10"
		viewBox="0 0 12 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.14251 0.485505C5.53091 -0.161834 6.46909 -0.161835 6.85749 0.485504L12 9.05635L0 9.05635L5.14251 0.485505Z"
			fill="#4D4C52"
		/>
	</svg>
</div>




<style lang="scss">
	@import '../styles/utils/_mixins.scss';


	.main-container {
		width: 166px;
		// height: 500px;
		padding: 12px;
		border: 1px solid #444247;

		background: linear-gradient(180deg, #4e4c52 0%, #363539 100%);
		box-sizing: border-box;
		box-shadow: inset 2px 2px 4px #58565c;
		border-radius: 4px;

		position: absolute;
		margin-top: 8px;

        animation: changeColor 0.3s forwards;

	}

	.materia-name {
		@include text-mixin('Inter', 12px, 16px, 500, #f9fafb, 0.025em);

		font-feature-settings: 'tnum' on, 'lnum' on;
		margin-bottom: 1rem;
	}

	span {
		@include text-mixin('Inter', 12px, 16px, 400, #b7b5ba, 0.002em);

		font-feature-settings: 'tnum' on, 'lnum' on;
	}

	time {

        @include text-mixin('Inter', 12px, 16px, 500, #eaeaeb, -0.005em);

		font-feature-settings: 'tnum' on, 'lnum' on;

	}

	svg {
		position: absolute;
		top: -6px;
		right: 6px;
	}

    @keyframes changeColor {
        from {
            opacity: 0;
        }
    }
</style>
