<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
	import { currentTab } from '$lib/stores/session-store';
    import { fade } from '$lib/animation_store/animations';

	let elem;
    let routes = [ '/', '/newComponent', '/playground' ];

	function setCurrentTab(x){
        $currentTab = x;
        fade(elem);
    };

    onMount(() => {
        let currentURL = $page.url.pathname;
        let initialNum = routes.indexOf(currentURL) + 1;
        setCurrentTab(initialNum);

        console.log('Mounted Component')
    });
</script>




<div>
	<section>
		<!-- LOGO -->
		<a href="#" class="logo">
			<img src="/icons/lare-logo.svg" alt="" />
		</a>

		<!-- DIVIDER -->
		<article class="box">
			<hr />
		</article>

		<!-- MENU DE NAVEGACIÓN -->
		<nav>
			<!-- HOME ICON -->
			<a href="/" on:click={() => setCurrentTab(1)} >
				<svg
					width="28"
					height="28"
					class:active={$currentTab === 1}
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.125 24.5C4.67422 24.5 3.5 23.3227 3.5 21.8728V12.22C3.5 11.4068 3.8763 10.6392 4.51953 10.1415L12.3945 4.04866C13.3401 3.31711 14.66 3.31711 15.6055 4.04866L23.4805 10.1415C24.1237 10.6392 24.5 11.4068 24.5 12.22V21.8728C24.5 23.3227 23.3258 24.5 21.875 24.5H6.125ZM12.25 19.25C12.25 18.2835 13.0335 17.5 14 17.5C14.9665 17.5 15.75 18.2835 15.75 19.25V22.75H12.25V19.25Z"
					/>
				</svg>
			</a>

			<!-- METRICS ICON -->
			<a href="/newComponent" on:click={() => setCurrentTab(2)}>
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					class:active={$currentTab === 2}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3.5 7.875C3.5 5.45875 5.45875 3.5 7.875 3.5H20.125C22.5412 3.5 24.5 5.45875 24.5 7.875V20.125C24.5 22.5412 22.5412 24.5 20.125 24.5H7.875C5.45875 24.5 3.5 22.5412 3.5 20.125V7.875ZM20.7972 11.0602C21.1066 10.6889 21.0564 10.1372 20.6852 9.82783C20.3139 9.51846 19.7622 9.56862 19.4528 9.93986L15.61 14.5513L12.775 12.425C12.4266 12.1638 11.9392 12.1984 11.6313 12.5063L7.25628 16.8813C6.91457 17.223 6.91457 17.777 7.25628 18.1187C7.59799 18.4604 8.15201 18.4604 8.49372 18.1187L12.3321 14.2804L15.225 16.45C15.5977 16.7295 16.124 16.668 16.4222 16.3102L20.7972 11.0602Z"
					/>
				</svg>
			</a>

			<!-- MATERIAS ICON -->
			<a href="/playground" on:click={() => setCurrentTab(3)} >
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					class:active={$currentTab === 3}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.625 3.5C10.1082 3.5 10.5 3.89175 10.5 4.375V5.25H17.5V4.375C17.5 3.89175 17.8918 3.5 18.375 3.5C18.8582 3.5 19.25 3.89175 19.25 4.375V5.25H21.875C23.3247 5.25 24.5 6.42525 24.5 7.875V21.875C24.5 23.3247 23.3247 24.5 21.875 24.5H6.125C4.67525 24.5 3.5 23.3247 3.5 21.875V7.875C3.5 6.42525 4.67525 5.25 6.125 5.25H8.75V4.375C8.75 3.89175 9.14175 3.5 9.625 3.5ZM5.25 10.5L22.75 10.5V7.875C22.75 7.39175 22.3582 7 21.875 7H19.25V7.875C19.25 8.35825 18.8582 8.75 18.375 8.75C17.8918 8.75 17.5 8.35825 17.5 7.875V7H10.5V7.875C10.5 8.35825 10.1082 8.75 9.625 8.75C9.14175 8.75 8.75 8.35825 8.75 7.875V7H6.125C5.64175 7 5.25 7.39175 5.25 7.875V10.5Z"
					/>
				</svg>
			</a>

			<!-- ACTIVE INDICATOR -->
			<article
                class="active-indicator"
                bind:this={elem}
			/>
		</nav>
	</section>
</div>



<style lang="scss">
	@import '../styles/Navbar.scss';
</style>
