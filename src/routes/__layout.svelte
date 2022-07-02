<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import SignIn from "$lib/components/SignIn.svelte";
  import { userUID } from "$lib/stores/session-store";
</script>

{#if $userUID}
  <NavBar />
  <slot></slot>
{:else}
  {#if $userUID === null }
    <p>loading page</p>
  {:else if $userUID === undefined}
    <SignIn />
  {/if}
{/if}


