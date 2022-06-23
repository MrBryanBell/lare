/* eslint-disable */
import { cycle } from '../stores/cycle-counter-store';

type ActionType = 'goNext' | 'goPrevious';
type ScrollDirection = 'up' | 'down';

export function changeCycleByClick(event: MouseEvent) {
	const actionType: ActionType = <ActionType>(event.target as HTMLElement).dataset.actionType;

	if (actionType === 'goNext') return cycle.goNext();

	return cycle.goPrevious();
};

export function changeCycleByScroll(event: WheelEvent) {
	const scrollDirection: ScrollDirection = getScrollDirection(event);
	if (scrollDirection === 'up') return cycle.goNext();
	
	return cycle.goPrevious();
};

export function getScrollDirection(event: WheelEvent): ScrollDirection {
	return (event.deltaY < 0) ? 'up' : 'down';
};
