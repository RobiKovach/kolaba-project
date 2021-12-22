const fileInputs = document.querySelectorAll('.file-upload input[type="file"]');

const setFileNamePreview = event => {
	const fileName = event.target.files[0].name,
			id = event.target.id,
			wrap = document.getElementById(id).closest('.file-upload'),
			previewBox = wrap.querySelector('.file-upload__preview')

	previewBox.innerHTML = fileName;
	if (!previewBox.classList.add('active')) previewBox.classList.add('checked');
}

fileInputs.forEach(function(button) {
	button.addEventListener('change', setFileNamePreview);
});