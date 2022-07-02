/* eslint-disable */
import { cycle } from '../stores/cycle-counter-store';
import { getScrollDirection } from './get-scroll-direction';

type ActionType = 'goNext' | 'goPrevious';
type ScrollDirection = 'up' | 'down';

export function changeCycleByClick(actionType: ActionType) {
	if (actionType === 'goNext') return cycle.goNext();

	return cycle.goPrevious();
};

export function changeCycleByScroll(event: WheelEvent) {
	const scrollDirection: ScrollDirection = getScrollDirection(event);
	if (scrollDirection === 'up') return cycle.goNext();
	
	return cycle.goPrevious();
};