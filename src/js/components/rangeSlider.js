const fileInputs = document.querySelectorAll('.range-slider input[type="range"]');

const setRangeValue = event => {
	const value = event.target.valueAsNumber,
			id = event.target.id,
			counter = document.querySelector('.range-slider__counter[data-slider-id="#' + id +'"]'),
			numberBox = document.querySelector('.range-slider-counter[data-slider-id="#' + id +'"]')

	counter.innerHTML = value;
	numberBox.innerHTML = value;
}


function onRangeChange(r,f) {
  var n,c,m;
  r.addEventListener("input",function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
  r.addEventListener("change",function(e){if(!n)f(e);});
}

fileInputs.forEach(function(input) {
	onRangeChange(input, setRangeValue);
});