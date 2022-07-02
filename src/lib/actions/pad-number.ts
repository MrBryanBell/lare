export function padNumber(number: number) {
	if (number <= 9) {
		return `0${number}`;
	}

	return `${number}`;
}
