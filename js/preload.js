// Runs before first paint: applies the saved background color and themed favicon.
var saved = localStorage.getItem('background');
document.documentElement.style.setProperty('--bg', saved || '#85929E');

window.setFavicon = function (color) {
	var link = document.querySelector('link[rel="icon"]');
	if (!link) return;
	var svg;
	if (color) {
		svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7' fill='" + color + "'/></svg>";
	} else {
		svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><circle cx='8' cy='8' r='6' fill='none' stroke='#85929E' stroke-width='1.5'/></svg>";
	}
	link.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
};

setFavicon(saved);