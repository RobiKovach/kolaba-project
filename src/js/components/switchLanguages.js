const languages = document.querySelectorAll('.languages');

const toggleLanguagesBox = event => {
	const _this = event.target,
		wrap = _this.closest('.languages');

	if (!wrap.classList.contains('active')) {
		wrap.classList.add('active');
	} else {
		wrap.classList.remove('active');
	}
};

const clickSpace = event => {
	const target = event.target;
	const wrap = target.closest('.languages');
	const openLang = document.querySelector('.languages.active')

	if ((wrap === null) && (openLang !== null)) {
		document.querySelector('.languages.active').classList.remove('active');
	}
}

languages.forEach(function(button) {
	button.addEventListener('click', toggleLanguagesBox);
});

document.addEventListener('click', clickSpace);