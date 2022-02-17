<script>
    import NavBar from "../components/NavBar.svelte";
    import { userUID } from "../stores/session_store";
    import SignIn from "../components/SignIn.svelte";

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


