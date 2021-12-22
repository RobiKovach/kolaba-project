'use strict';

const buttonsOpenModal = document.querySelectorAll('.js-modal');
const buttonsCloseModal = document.querySelectorAll('.js-close-modal');

const openModal = (event) => {
	event.preventDefault();

	const currentButton = event.target.closest( '.js-modal' ),
			dataTarget = currentButton.dataset.target;

	const modal = document.querySelector('.modal[data-modal="' + dataTarget + '"]'),
			body = document.querySelector('body');
	
	if (modal === null) return;
		closeModals();
		body.classList.add('modal-open');
		modal.classList.add('show');
}
const closeModals = () => {
	const modal = document.querySelector('.modal.show'),
			body = document.querySelector('body.modal-open');
					
	if (body !== null) body.classList.remove('modal-open');
	if (modal !== null) modal.classList.remove('show');
}

buttonsOpenModal.forEach(function(button) {
	button.addEventListener('click', openModal);
});

buttonsCloseModal.forEach(function(button) {
	button.addEventListener('click', closeModals);
});