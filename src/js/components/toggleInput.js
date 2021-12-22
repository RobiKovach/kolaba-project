const btnAddContent = document.querySelector('.btn-add-content');
const btnCloseContent = document.querySelector('.hidden-content__btn');

const showContent = event => {
	const _this = event.target,
			wrap = _this.closest('.hidden-content'),
			inputHidden = wrap.querySelector('input[type="hidden"]');
	
	if (!wrap.classList.contains('hidden-content--show')) {
		wrap.classList.add('hidden-content--show');
		inputHidden.value = "yes";
	}
}

const hiddenContent = event => {
	const _this = event.target,
			wrap = _this.closest('.hidden-content'),
			inputHidden = wrap.querySelector('input[type="hidden"]');
	
	if (wrap.classList.contains('hidden-content--show')) {
		wrap.classList.remove('hidden-content--show');
		inputHidden.value = "no";
	}
}



if (btnAddContent !== null)
	btnAddContent.addEventListener("click", showContent);

if (btnCloseContent !== null)
	btnCloseContent.addEventListener("click", hiddenContent);