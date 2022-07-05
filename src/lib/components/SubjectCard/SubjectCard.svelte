<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
	import SubjectCardMetrics from './SubjectCardMetrics.svelte';
	import SubjectCardOptions from './SubjectCardOptions.svelte';
	import CardWrapper from './CardWrapper.svelte';
	import InfoIcon from '$lib/icons/InfoIcon.svelte';

	export let index: number;
	export let subject = {
		id          : 'b92ba872-b74d-447b-b33d-970d3b2dc8ef',
		name        : 'Introducción a la Comunicación',
		uv          : 4,
		code        : 'COM',
		grade       : 9.6,
		cycle       : 1,
		pensumOrder : 1,
		isOptative  : false,
	}

</script>




<CardWrapper {subject} {index}>
	<h4
		class="subject-name" 
		data-testId="subject-name"
		>{subject.name}
	</h4>

	<div class="card-data">
		<SubjectCardMetrics uv={subject.uv} grade={subject.grade} />
		<SubjectCardOptions subjectId={subject.id} />
	</div>

	<div class="card-footer">
		<InfoIcon
			height="24px"
			fill="#C0CBD9"
			hoverFill="#8CA0BA"
		/>
		<Toggle />
	</div>
</CardWrapper >





<style lang="scss">
	@import '../../styles/utils/_mixins.scss';

	:global(.card-overlay) {
		position: absolute;
		background: hsla(214, 95%, 68%, 1);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0.3;
		border-radius: 0.5rem;
		pointer-events: none;
	}

	$card-background: #ffffff;

	$card-text-details: #a5b2cf;
	$card-text-primary: #677cad;

	$checkmark-icon: #7be5bb;
	$info-icon: #b8cdff;
	$vertical-menu-icon: #c5cfe7;

	.subject-name {
		@include text-mixin('Archivo', 13px, 17px, 500, #414F62, -0.001em);

		font-feature-settings: 'tnum' on, 'lnum' on;
		height: 34px;
		margin-bottom: 16px;

		//TODO: BORRAR
		line-clamp: 2;
		text-overflow: ellipsis;
		overflow: hidden;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.card-footer,
	.card-data {
		@include flex-container(row, space-between, 0);
	}

	.card-data {
		margin-bottom: 24px;
	}

	.card-footer {
		align-items: center;
	}
</style>
