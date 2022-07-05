<script lang="ts">
	import { student } from '../stores/student-store';
	import { isAdderActive } from "$lib/stores/session-store";
	import MetricCard from "$lib/components/MetricCard.svelte";
	import Calculator from "$lib/components/Calculator.svelte";
	import StaticCounter from "./Number/StaticCounter.svelte";

	// $: cumAcumulado = $student.cumAcumulado
	const cumAcumulado = student.cumAcumulado$
	const cumEgresado = student.cumEgresado$
	const subjects = student.subjects$
</script>




<section
	class="widget-container"
	style:opacity={($isAdderActive) ? 0.5 : 1}
	>
	<div class="metric-card-container">
		
		<MetricCard 
			metricName="Cum Acumulado"
			metricValue={$cumAcumulado}
			backgroundColor="#268EF8"
			placeholderName="REPT"
		/>

		<MetricCard 
			metricName="Cum Egresado"
			metricValue={$cumEgresado}
			backgroundColor="#1C84FE"
		/>

		<MetricCard
			metricName="Materias Inscritas"
			backgroundColor="#095AAB"
			hasSlot={true}
		>
			<StaticCounter
				value={$subjects.length}
				fontColor="white"
			/>
		</MetricCard>

	</div>

	<Calculator />
</section>





<style lang="scss">

	.metric-card-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	.widget-container {
		grid-area: metrics;

		display: grid;
		grid-template-rows: 136px 244px;
		gap: 8px;
		transition: all 4s cubic-bezier(0.16, 1, 0.3, 1);
	}
</style>
