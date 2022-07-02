/* eslint-disable */
type ScrollDirection = 'up' | 'down';

export function getScrollDirection( event: WheelEvent ): ScrollDirection {
	return ( event.deltaY < 0 ) ? 'up' : 'down';
}
