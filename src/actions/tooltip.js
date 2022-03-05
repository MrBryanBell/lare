import Tooltip from '../components/Tooltip.svelte';


function tooltip(node) {

	let materiaName;
	let lastUpdate;
	let tooltipComponent;

	//FUNCTIONS FOR LISTENERS
	function onMouseOver(event) {
		materiaName = node.getAttribute('data-subject-name');
		lastUpdate = node.getAttribute('data-last-update');

		tooltipComponent = new Tooltip({
			props: {
				text: materiaName,
				lastUpdate,
				x: ( +event.pageX - 152 ) + 'px',
				y: ( +event.pageY + 24 ) + 'px',
			},
			target: document.body,

		});

        
	}

	function onMouseMove(event) {
		tooltipComponent.$set({
			x: ( +event.pageX - 152 ) + 'px',
			y: ( +event.pageY + 24 ) + 'px',
		});

	}

	function onMouseLeave(event) {
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