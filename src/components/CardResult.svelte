<script>
    export let data = {
        name: 'Teoría de la Comunicación',
        uv: 4,
    };
</script>

    <div>
        <h2>{data.name}</h2>
        <span>
            <img class="dividend-icon" src="/icons/dividend.svg" alt="">
        </span>
        <img class="info-icon" src="/icons/cardResult-info-icon.svg" alt="">
    </div>



<style lang="scss" >
    @import '../styles/utils/_mixins.scss';

    h2 {
        @include text-mixin('Inter', 14px, 18px, var(--inter-regular), #FFFFFF, -0.016em);
        height: 60px;
        margin-bottom: 12px;
    }

    div {
        background: linear-gradient(0deg, #2479F9, #2479F9), linear-gradient(134.59deg, #F2F4F7 -4.92%, #FFFFFF 51.15%, #F2F4F7 104.93%);
        border-radius: 8px;
        padding: 24px 20px;

        position: relative;
    }

    .info-icon {
        position: absolute;
        bottom: 16px;
        right: 16px;
    }

    span {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;
        
    }
</style>
