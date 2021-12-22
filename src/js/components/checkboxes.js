const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');

const setChackboxesState = () => {
	checkboxes.forEach(function(currentCheckbox) {
		const wrapCheckbox = currentCheckbox.closest('.checkbox')

		if (currentCheckbox.checked) wrapCheckbox.classList.add('checked');
	});
}

const changeState = (event) => {
	const currentCheckbox = event.target,
			wrapCheckbox = currentCheckbox.closest('.checkbox')

	if (currentCheckbox.checked) {
		wrapCheckbox.classList.add('checked');
	} else {
		wrapCheckbox.classList.remove('checked');
	}

	if (wrapCheckbox.classList.contains('auction__content__checkbox')) {
		const auctionBox = wrapCheckbox.closest('.auction');

		(!auctionBox.classList.contains('auction--disabled'))
			? auctionBox.classList.add('auction--disabled')
			: auctionBox.classList.remove('auction--disabled')
	}
}

document.addEventListener("DOMContentLoaded", setChackboxesState);
checkboxes.forEach(function(button) {
	button.addEventListener('click', changeState);
});