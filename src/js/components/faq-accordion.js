'use strict';

generateDotsHTML();
const accordionButtons = document.querySelectorAll('.js-accordion-btn');
const accordionDots = document.querySelectorAll('.faq-accordion-dots');
const accordionDotButtons = document.querySelectorAll('.faq-accordion-dots__item');
const currentContentDiv = document.querySelector('.faq__content__text');

function generateDotsHTML() {
	const accordions = document.querySelectorAll('.faq-accordion'),
			dots = document.createElement('ul');

	dots.classList.add('faq-accordion-dots');
	accordions.forEach(function(item) {
		const button = item.querySelector('.js-accordion-btn'),
				active = button.classList.contains('active'),
				target = button.dataset.target;

		let dotsItem = document.createElement('li');
		dotsItem.classList.add('faq-accordion-dots__item');
		if (active) dotsItem.classList.add('active');
		dotsItem.setAttribute('data-target', target);
		dots.appendChild(dotsItem);
	});

	insertDots(dots);
}
function insertDots(dots) {
	const accordions = document.querySelectorAll('.faq-accordion');
	let clone;
	accordions.forEach(function(item) {
		const content = item.querySelector('.faq-accordion__answer');
		clone = dots.cloneNode(true);
		content.append(clone);
	});
}

const switchActiveBox = event => {
	event.preventDefault();

	if (event.target.classList.contains('active')) return false;

	const dataTarget = event.target.dataset.target,
			beforeActiveButton = document.querySelector('.js-accordion-btn.active'),
			currentActiveButton = document.querySelector('.js-accordion-btn[data-target="' + dataTarget + '"]');

	switchActiveDots(dataTarget);
	beforeActiveButton.classList.remove('active');
	currentActiveButton.classList.add('active');
	switchContent(dataTarget);
}
const switchContent = target => {
	const text = document.querySelector('.faq-accordion__answer__content[data-content="' + target + '"]').innerHTML;
	currentContentDiv.innerHTML = text;
}

const switchActiveDots = target => {
	accordionDots.forEach(function(list) {
		const beforeActiveButton = list.querySelector('.faq-accordion-dots__item.active'),
				currentActiveButton = list.querySelector('.faq-accordion-dots__item[data-target="' + target + '"]');

		beforeActiveButton.classList.remove('active');
		currentActiveButton.classList.add('active');
	});
}

accordionButtons.forEach(function(button) {
	button.addEventListener('click', switchActiveBox);
});
accordionDotButtons.forEach(function(button) {
	button.addEventListener('click', switchActiveBox);
});