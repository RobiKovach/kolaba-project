const stickySelects = document.querySelectorAll('.navigation__sticky'),
		stickyButtons = document.querySelectorAll('.navigation__btn');

const getSelectedPosition = sticky => {
	const wrap = sticky.closest('.navigation__list'),
			selected = wrap.querySelector('.selected');

	selectedLeftPosition = selected.offsetLeft;
	selectedWidth = selected.offsetWidth;

	wrap.setAttribute("data-sticky-left", selectedLeftPosition);
	wrap.setAttribute("data-sticky-width", selectedWidth);

	setDefaultPosition(sticky);
};
const setDefaultPosition = sticky => {
	const wrap = sticky.closest('.navigation__list'),
			currentLeft = wrap.dataset.stickyLeft,
			currentWidth = wrap.dataset.stickyWidth;

	sticky.style.left = currentLeft + "px";
	sticky.style.width = currentWidth + "px";
};
const setNewDefaultPosition = event => {
	event.preventDefault();

	const _this = event.target,
			wrap = _this.closest('.navigation__list'),
			currentButton = _this.closest('.navigation__list__item'),
			selectButton = wrap.querySelector('.selected'),
			sticky = wrap.querySelector('.navigation__sticky');

	selectButton.classList.remove('selected');
	currentButton.classList.add('selected');
	getSelectedPosition(sticky);
};

stickySelects.forEach(function(sticky) {
	getSelectedPosition(sticky)
});

stickyButtons.forEach(function(button) {
	button.addEventListener('click', setNewDefaultPosition);
});