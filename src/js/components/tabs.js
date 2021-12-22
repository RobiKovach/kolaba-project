'use strict';

const tabsNav = document.querySelectorAll('.nav-link');

const changeTab = event => {
	event.preventDefault();

	if (event.target.classList.contains('active')) return false;

	const _this = event.target,
			dataTarget = _this.dataset.target,
			currentPane = document.querySelector('.tab-pane[data-tab="' + dataTarget + '"]'),
			beforeActiveNav = document.querySelector('.nav-link.active'),
			beforeActivePane = document.querySelector('.tab-pane.active');
			
	beforeActiveNav.classList.remove('active');
	beforeActivePane.classList.remove('active');

	_this.classList.add('active');
	currentPane.classList.add('active');
}

tabsNav.forEach(function(button) {
	button.addEventListener('click', changeTab);
});