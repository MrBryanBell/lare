/* eslint-disable */
// import { it, expect, beforeEach } from 'vitest';
import { render, screen, type RenderResult, fireEvent, cleanup } from '@testing-library/svelte';
import SubjectCard from '../../components/SubjectCard/SubjectCard.svelte';

const subjectConfig = {
	id          : '85402e90-84b8-4394-ad86-739c416ea612',
	name        : 'Introducción a la Comunicación',
	uv          : 4,
	code        : '03GC02',
	grade       : 9.6,
	cycle       : 1,
	pensumOrder : 2,
	isOptative  : false,
}

let subjectCard  : RenderResult;
let subjectUv    : HTMLElement;
let subjectName  : HTMLElement;
let subjectGrade : HTMLElement;
let cardWrapper  : HTMLElement;


beforeEach(() => {
	subjectCard = render(SubjectCard, { subject: subjectConfig });
	const { getByTestId } = subjectCard;

	subjectUv = getByTestId('subject-uv');
	subjectName = getByTestId('subject-name');
	subjectGrade = getByTestId('subject-grade');
	cardWrapper = getByTestId('card-wrapper');
});


it('should have "04 uv" as textContent', () => {
	const expected = '04 uv';
	const textContent = subjectUv.textContent;

	expect(textContent).toBe(expected);
});


it('should have "Introducción a la Comunicación" as textContent', () => {
	const expected = 'Introducción a la Comunicación';
	const textContent = subjectName.textContent;

	expect(textContent).toBe(expected);
});


it('should have 9.6 as textContent', () => {
	const expected = '9.6';
	const textContent = subjectGrade.textContent;

	expect(textContent).toBe(expected);
});

it('should have subjectID in HTMLElement Attribute "data-subjectId"', () => {
	const expected = '85402e90-84b8-4394-ad86-739c416ea612';
	const subjectId = cardWrapper.dataset.subjectId;

	expect(subjectId).toBe(expected);
});