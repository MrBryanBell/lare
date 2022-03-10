import CardContextMenu from '../components/CardContextMenu.svelte';


function showContextMenu(node, currentSubjectID) {
    
    let contextMenuComponent;
    let isContextMenuActive = false;
    let fatherNode = node.closest('.main-container');
    let closest = node.closest('.main-container')

    let overlay;


    // FUNCTIONS
    function onClick(event) {
        console.log(closest);

        if (!isContextMenuActive) {

            contextMenuComponent = new CardContextMenu({
                props: {
                    display: 'block',
                    currentSubjectID,
                },
                target: node,
            })

            node.addEventListener('mouseout', onMouseOut, true);

            isContextMenuActive = true;

            //ADDING THE OVERLAY
            overlay = document.createElement('section')
            overlay.classList.add('card-overlay')
            fatherNode.appendChild(overlay);
        }
    }


    function onMouseOut(event) {
        let mouseMovedOut = event.relatedTarget.nodeName === 'DIV'
        
        if (mouseMovedOut) { 
            contextMenuComponent.$destroy();
            isContextMenuActive = false;
            overlay.remove();
        }
    }

    node.addEventListener('click', onClick, true);




    // REMOVING LISTENERS WHEN COMPONENT IS DESTROYED
	return {
		destroy() {
            node.removeEventListener('click', onClick, true);
            node.removeEventListener('mouseout', onClick, true);
		},
	};

}






export {
    showContextMenu,
}