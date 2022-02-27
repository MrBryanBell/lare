<script>
    // your script goes here
    import { isAdderActive } from "../stores/session_store";
</script>

<!-- markup (zero or more items) goes here -->

<div  
    style:width={($isAdderActive) ? '686px' : '100%'}
    >
    {#if !$isAdderActive}
   
        <!-- SALUDO -->
        <section class="saludo">
            <span>¡Hola Bryan! 👋</span>
            <p>Tus comentarios son importantes. Cuéntanos qué piensas sobre <b>Proyecto Laré</b>.</p>
        </section>

        <!-- BUTTONS -->
        <section class="cta" >
            <button class="secondary">Quizá Luego</button>
            <button class="primary">Aceptar</button>
        </section>

    {:else}

        <p class="meq" >Let’s slap my favorite svelte/easing function on our transition and call it a day.</p>

    {/if}
</div>



<style lang="scss" >
    @import '../styles/assistant_bar.scss';
</style>


