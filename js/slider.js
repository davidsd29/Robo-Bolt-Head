const ranges = document.querySelectorAll('[type=range]');
let head = document.querySelector('head');

let i = 0;
while (i < ranges.length) {
	console.log("lala")
	ranges[i].addEventListener('input',function(){
		slide(this);
	});
	// also set attributes onload of page
	slide(ranges[i]);
	i++;
}

function slide(s){
	let sliderValue = s.value;
	let sliderID = s.id;

	document.body.style.setProperty('--eye'+sliderID+'-value',sliderValue+'%');
	// head.setAttribute('data-'+sliderID+'-value',sliderValue);
}
