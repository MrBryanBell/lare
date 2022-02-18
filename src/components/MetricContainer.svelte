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

        background: radial-gradient(105.25% 42.89% at 50.21% 57.11%, #97CAFC 0%, #3597F8 100%);
        box-shadow: inset 2px 2px 8px #A7CEFB, inset -2px -2px 8px #2786F6;
        border-radius: 12px;
    }

    // --- INFO-ICON --- //
	.info-icon {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>