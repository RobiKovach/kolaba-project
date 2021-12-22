const auctionBtn = document.querySelector('.auction__header');

const toggleSliderBox = event => {
	const _this = event.target,
			wrap = _this.closest('.auction')

	if (wrap.classList.contains('auction--disabled')) return false;

	if (!wrap.classList.contains('auction--start')) wrap.classList.add('auction--start');

	(!wrap.classList.contains('auction--show-slider'))
		? wrap.classList.add('auction--show-slider')
		: wrap.classList.remove('auction--show-slider')
}

if (auctionBtn !== null)
	auctionBtn.addEventListener("click", toggleSliderBox);
