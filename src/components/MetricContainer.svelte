<div>
    <slot></slot>
    <img class="info-icon" src="../../static/icons/info-metric-light.svg" alt="" />
</div>

<style lang="scss">
    div {
        //width: 240px;
        // height: 240px;
        aspect-ratio: 1 / 1;

        
        padding: 20px;
        padding-top: 16px;
        padding-bottom: 24px;

        position: relative;

        background: radial-gradient(45.97% 45.97% at 47.53% 50%, #B0D1FD 0%, #92C0FC 100%);
        box-shadow: inset 1px 1px 2px #EBF4FE;
        border-radius: 12px;
    }

    // --- INFO-ICON --- //
	.info-icon {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>