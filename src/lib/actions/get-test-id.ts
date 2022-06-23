export type ActionType = 'goNext' | 'goPrevious';

export function getTestId(actionType: ActionType): string {
	return `${actionType}-button`;
}
