const ranges = document.querySelectorAll('[type="range"]');
console.log("I'm wondering what you are trying to find here");

ranges.forEach(range => {
	// Add event listener to update the value on input change
	range.addEventListener('input', () => slide(range));

	slide(range);
});

// Function to update CSS variable based on slider value
function slide(slider) {
	const value = slider.value;
	const id = String(slider.id);

	// Set custom CSS variable on the body element
	document.body.style.setProperty(`--eye${id}-value`, `${value}%`);
}