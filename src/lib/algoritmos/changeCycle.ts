import { get } from 'svelte/store';
import { cicloActual } from '$lib/stores/cycle_store';

type EventType = WheelEvent | MouseEvent;
type Qty = -1 | 1;

function changeCycle(e: EventType, qty?: Qty) {
	const itWasClick = e.type === 'click';
	const itWasWheel = e.type === 'wheel';

	const currentValue = get(cicloActual);

	if (e instanceof PointerEvent) {
		// CLICK EN -1 && CICLO NO SEA 1
		if (qty === -1 && currentValue !== 1) return cicloActual.update((c) => currentValue + qty);

		// CLICK EN +1 && CICLO NO SEA 10
		if (qty === 1 && currentValue !== 10) return cicloActual.update((c) => currentValue + qty);
	}

	if (e instanceof WheelEvent) {
		// WHEEL UP && CICLO NO SEA 10
		if (e.deltaY < 0 && currentValue !== 10) {
			cicloActual.update((c) => currentValue + 1);
		}

		// WHEEL DOWN && CICLO NO SEA 1
		else if (e.deltaY > 0 && currentValue !== 1) {
			cicloActual.update((c) => currentValue - 1);
		}
	}
}

export { changeCycle };
