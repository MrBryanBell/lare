<script lang="ts">
	import { student } from '../stores/student-store';
	import DeleteSubjectIcon from '$lib/icons/DeleteSubjectIcon.svelte';
	import EditSubjectIcon from '$lib/icons/EditSubjectIcon.svelte';

	export let display = 'block';
	export let subjectId = 'f435dsa45sdfs34sa';
</script>



<section
	class="context-menu-wrapper"
	style:display
	>
	<button>
		<EditSubjectIcon />
		<span class="button-text">editar</span>
	</button>

	<button on:click={() => student.unenroll(subjectId)}>
		<DeleteSubjectIcon />
		<span class="button-text">eliminar</span> 
	</button>

	<svg width="8" height="6" viewBox="0 0 8 6" fill="none">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.45749 0.485504C4.06909 -0.161835 3.13091 -0.161834 2.74251 0.485505L0 5.05635H7.2L4.45749 0.485504Z"
			fill="#C7D0DB"
		/>
	</svg>
</section>



<style lang="scss">

	/* * { outline: 1px solid red;} */

	.context-menu-wrapper {
		width: 120px;

		padding: 4px;
		background-color: #ECEFF3;
		box-shadow: -48px 34px 24px rgba(62, 66, 71, 0.02), -27px 19px 20px rgba(62, 66, 71, 0.08), -12px 9px 15px rgba(62, 66, 71, 0.13), -3px 2px 8px rgba(62, 66, 71, 0.15), 0px 0px 0px rgba(62, 66, 71, 0.15);
		border-radius: 4px;

		position: absolute;
		top: 110%;
		right: 0;

		display: flex;
		flex-direction: column;

		// EVITAR QUE INTERFIERA CON EL SWITCH
		z-index: 20;
	}

	button {
		border: none;
		background: transparent;
		border-radius: 2px;
		padding: 8px 6px;
		background-color: transparent;

		cursor: pointer;

		display: flex;
		align-items: center;
		gap: 8px;

		&:hover {
			background-color: #D4DBE3;
		}

		&:hover .button-text {
			color: #121417;
		}
	}

	span {
		font-family: 'Archivo';
		font-style: normal;
		font-weight: var(--archivo-regular);
		font-size: 14px;
		line-height: 100%;
		letter-spacing: -0.02em;
		color: #3F4650;
	}

	svg {
		position: absolute;
		//outline: 1px solid red;
		top: -5px;
		right: 8px;
	}
</style>
