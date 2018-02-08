import { $ } from './dom.js';

export default function applyColorsAndMessage(selector, { color, message }) {
	const node = $(selector);
	node.style.backgroundColor = color;
	node.textContent = message;
}