import CardContextMenu from '$lib/components/CardContextMenu.svelte';


function showContextMenu(node: HTMLElement, { id, pensumOrder }) {
    
    let contextMenuComponent: CardContextMenu;
    let isContextMenuActive = false;
    let fatherNode = node.closest('.main-container');
    let closest = node.closest('.main-container')

    let overlay: HTMLElement;


    // FUNCTIONS
    function onClick(event: MouseEvent) {
        console.log(closest);

        if (!isContextMenuActive) {

            contextMenuComponent = new CardContextMenu({
                props: {
                    display: 'block',
                    currentSubjectID: id,
                    currentSubjectOrder: pensumOrder,
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


    function onMouseOut(event: MouseEvent) {
        let mouseMovedOut = (event.relatedTarget as HTMLElement).nodeName === 'DIV'
        
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