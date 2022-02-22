<div>
    <slot></slot>
    <img class="info-icon" src="/icons/info-metric-light.svg" alt="" />
</div>

<style lang="scss">
    div {
        grid-column: 1 / 3;
        grid-row: 2 / 3;

        // width: 240px;
        // height: 240px;
        // aspect-ratio: 1 / 1;
        
        padding: 20px;
        padding-top: 16px;
        padding-bottom: 24px;

        position: relative;

        background: radial-gradient(39.44% 67.31% at 50.1% 61.03%, #97CAFC 0%, #2690F8 100%);
        box-shadow: inset 2px 2px 8px #76B2FA, inset -2px -2px 8px #318CF7;
        border-radius: 12px;
    }

    // --- INFO-ICON --- //
	.info-icon {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>