const copyAddressButtons = document.querySelectorAll('.js-copy-clickboard');

function getCurrentAddress(e) {
	const target = e.target,
		button = target.closest('.js-copy-clickboard'),
		copyValue = button.dataset.valueCopy;

	if (copyValue === null)
		return false;

	const addressText = copyValue;
	if (addressText == '') 
		return false;

	return addressText;
}

function copyClickboard(e) {
	e.preventDefault();

	const foo = getCurrentAddress(e);

	if (!foo) {
		showMessage("Oops, unable to copy");
		return false;
	}
	copyTextToClipboard(foo);
}

function showMessage(msg) {
	const html = `<div class="copy-clickboard-popup box">${msg}</div>`;

	copyAddressButtons.forEach(function(button) {
		button.removeEventListener("click", copyClickboard)
	});
	document.body.insertAdjacentHTML("afterBegin", html);

	setTimeout(hiddenMessage, 1200);
}

function hiddenMessage() {
	const msgBox = document.querySelector('.copy-clickboard-popup');
	document.body.removeChild(msgBox);

	copyAddressButtons.forEach(function(button) {
		button.addEventListener("click", copyClickboard)
	});
}

function copyTextToClipboard(text) {
	const textArea = document.createElement("textarea");

	//
	// *** This styling is an extra step which is likely not required. ***
	//
	// Why is it here? To ensure:
	// 1. the element is able to have focus and selection.
	// 2. if the element was to flash render it has minimal visual impact.
	// 3. less flakyness with selection and copying which **might** occur if
	//    the textarea element is not visible.
	//
	// The likelihood is the element won't even render, not even a
	// flash, so some of these are just precautions. However in
	// Internet Explorer the element is visible whilst the popup
	// box asking the user for permission for the web page to
	// copy to the clipboard.
	//

	// Place in the top-left corner of screen regardless of scroll position.
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;

	// Ensure it has a small width and height. Setting to 1px / 1em
	// doesn't work as this gives a negative w/h on some browsers.
	textArea.style.width = '2em';
	textArea.style.height = '2em';

	// We don't need padding, reducing the size if it does flash render.
	textArea.style.padding = 0;

	// Clean up any borders.
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';

	// Avoid flash of the white box if rendered for any reason.
	textArea.style.background = 'transparent';


	textArea.value = text;

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand('copy');
		// const msg = successful ? 'successful' : 'unsuccessful';
		// console.log('Copying text command was ' + msg);	
		showMessage("Copied to clipboard");
	} catch (err) {
		showMessage("Oops, unable to copy");
	}

	document.body.removeChild(textArea);
}


copyAddressButtons.forEach(function(button) {
	button.addEventListener("click", copyClickboard)
});