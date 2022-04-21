<script>
    import PopUp from "$lib/components/PopUp.svelte";
    import student from '../lib/stores/student-store'


    let subjects = student.subjects;
    
    $: console.log($subjects);
</script>

<!-- <PopUp /> -->


<button on:click={() => console.log($subjects)} >Print</button>


<style>
    button {
        margin-left: 100px;
    }
</style>