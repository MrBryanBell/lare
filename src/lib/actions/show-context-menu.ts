/* eslint-disable */
import SubjectContextMenu from '$lib/components/SubjectContextMenu.svelte';


function showContextMenu(node: HTMLElement, subjectId: string) {
	let contextMenuComponent: SubjectContextMenu;
	let isContextMenuActive = false;

	function onClick(event: MouseEvent) {
		if (!isContextMenuActive) {
			contextMenuComponent = new SubjectContextMenu({
				props: {
					display: 'flex',
					subjectId,
				},
				target: node,
			});

			node.addEventListener('mouseout', onMouseOut, true);
			isContextMenuActive = true;
		}
	}

	function onMouseOut(event: MouseEvent) {
		const mouseMovedOut = (event.relatedTarget as HTMLElement).nodeName === 'DIV';

		if (mouseMovedOut) {
			contextMenuComponent.$destroy();
			isContextMenuActive = false;
		}
	}

	node.addEventListener('click', onClick, true);

	return {
		destroy() {
			node.removeEventListener('click', onClick, true);
			node.removeEventListener('mouseout', onClick, true);
		},
	};
}

export { showContextMenu };
