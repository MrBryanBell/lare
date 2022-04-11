<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import SignIn from "$lib/components/SignIn.svelte";
    import { userUID } from "$lib/stores/session_store";

    console.log('Hello desde Layout')
</script>

{#if $userUID}
     <NavBar />
     <slot></slot>
{:else}
    <!-- else content here -->
    {#if $userUID === null }
         <!-- content here -->
         <p>loading page</p>
    {:else if $userUID === undefined}
         <SignIn />
         <!-- else if content here -->
    {/if}
{/if}


