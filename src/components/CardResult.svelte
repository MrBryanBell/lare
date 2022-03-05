<script>
    import { options } from "../icons/options-menu";
    import { fade, fly } from "svelte/transition";

    export let data = {
        name: 'Introducción a la Comunicación',
        uv: 4,
        code: "03GC02",
    };

    export let index;

    let color = '#FFFFFF';
</script>

    <div 
        data-subject-code={data.code}
        data-subject-uv={data.uv}
        data-subject-name={data.name}
        in:fly={ { y: 20, duration: 250, delay: ++index * 50 }}
        >
            <h2>{data.name}</h2>
            <span>
                <img class="dividend-icon" src="/icons/dividend.svg" alt="">
            </span>
            <img class="info-icon" src="/icons/cardResult-info-icon.svg" alt="">

    </div>



<style lang="scss" >
    @import '../styles/utils/_mixins.scss';

    h2 {
        @include text-mixin('Inter', 13px, 17px, var(--inter-regular), #FFFFFF, -0.003em);
        height: 60px;
        margin-bottom: 12px;
    }

    div {
        background: linear-gradient(0deg, #2479F9, #2479F9), linear-gradient(134.59deg, #F2F4F7 -4.92%, #FFFFFF 51.15%, #F2F4F7 104.93%);
        border-radius: 8px;
        padding: 24px 20px;

        position: relative;
        cursor: pointer;

        &:hover {
            outline: 2px solid white;
        }

        animation: changeOpacity 0.5s forwards;
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

    @keyframes changeOpacity {
        from {
            opacity: 0;
        }
    }

</style>
