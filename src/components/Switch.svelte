<script>
    export let isActive = false;

    export function toggleKnob(){
        isActive = !isActive;
    }

</script>




<div
    class:disabled-sw={!isActive}
    class:active-sw={isActive}
    on:click|stopPropagation>
    <div
        class:active-kn={isActive}
        class:disabled-kn={!isActive}>
    </div>
</div>





<style lang="scss">
    @import "../styles/_switch.scss";
</style>
