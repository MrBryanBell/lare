import Tooltip from '$lib/components/Tooltip.svelte';


function tooltip(node: HTMLElement) {

	let subjectName: string;
	let lastUpdate: string;
	let tooltipComponent: Tooltip;
    
	//FUNCTIONS FOR LISTENERS
	function onMouseOver(event: MouseEvent) {
		subjectName = node.getAttribute('data-subject-name');
		lastUpdate = node.getAttribute('data-last-update');

		tooltipComponent = new Tooltip({
			props: {
				text: subjectName,
				lastUpdate,
				x: ( +event.pageX - 152 ) + 'px',
				y: ( +event.pageY + 24 ) + 'px',
			},
			target: document.body,

		});

	}

	function onMouseMove(event: MouseEvent) {
		tooltipComponent.$set({
			x: ( +event.pageX - 152 ) + 'px',
			y: ( +event.pageY + 24 ) + 'px',
		});

	}

	function onMouseLeave(event: MouseEvent) {
		tooltipComponent.$destroy();
	}



	// ADDING THE LISTENERS
	node.addEventListener('mouseover', onMouseOver, true);
	node.addEventListener('mouseleave', onMouseLeave, true);
	node.addEventListener('mousemove', onMouseMove, true);



	// REMOVING LISTENERS WHEN COMPONENT IS DESTROYED
	return {
		destroy() {
			node.removeEventListener('mouseover', onMouseOver, true);
			node.removeEventListener('mouseleave', onMouseLeave, true);
			node.removeEventListener('mousemove', onMouseMove, true);
		},
	};
}



export {
    tooltip,
}