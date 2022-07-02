<script lang="ts">
	import { student } from '../lib/stores/student-store';

</script>

{#each $student.subjects as {id, name}}
	<p>{name}</p>
	{:else}
	<p>No subjects</p>
{/each}
